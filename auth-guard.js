import { auth, db } from "./firebase-config.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import {
    ref,
    get
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";


export function requireStaffAuth(options = {}) {

    const { requireAdmin = false } = options;

    return new Promise((resolve) => {

        onAuthStateChanged(auth, async (user) => {

            // ئەگەر Login نەکراوە
            if (!user) {
                goToLogin();
                return;
            }

            try {

                // گەڕان لە Realtime Database
                const staffRef = ref(
                    db,
                    "staff/" + user.uid
                );

                const snapshot = await get(staffRef);

                // ئەگەر UID لە staff نەبوو
                if (!snapshot.exists()) {

                    await signOut(auth);

                    goToLogin("not-staff");

                    return;
                }

                const data = snapshot.val();

                // تەنها Admin
                if (
                    requireAdmin &&
                    data.role !== "admin"
                ) {

                    alert(
                        "ئەم بەشە تەنها بۆ بەڕێوەبەرە."
                    );

                    window.location.href = "home.html";

                    return;
                }

                // زانیاری ستاف
                resolve({

                    uid: user.uid,

                    name:
                        data.name ||
                        user.email ||
                        "ستاف",

                    email:
                        data.email ||
                        user.email ||
                        "",

                    phone:
                        data.phone ||
                        "",

                    role:
                        data.role ||
                        "staff"

                });

            } catch (error) {

                console.error(
                    "هەڵە لە پشکنینی ستاف:",
                    error
                );

                alert(
                    "هەڵە لە پەیوەندی بە Database: " +
                    error.message
                );

                goToLogin();
            }

        });

    });
}


function goToLogin(reason = "") {

    const currentPage =
        location.pathname.split("/").pop();

    let url =
        "index.html?redirect=" +
        encodeURIComponent(currentPage);

    if (reason) {

        url +=
            "&reason=" +
            encodeURIComponent(reason);

    }

    window.location.href = url;
}


export async function logout() {

    try {

        await signOut(auth);

    } catch (error) {

        console.error(
            "هەڵە لە چوونەدەرەوە:",
            error
        );

    }

    window.location.href = "index.html";
}
