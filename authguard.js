// ===== پاسەوانی چوونەژوورەوە (هەموو پەڕە پارێزراوەکان ئەمە بەکاردەهێنن) =====
import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

/**
 * پشکنینی چوونەژوورەوە + ڕۆڵی ستاف.
 * ئەگەر چوونەژوورەوەی نەبوو یان لە staff-دا تۆمار نەکرابوو، دەگەڕێتەوە بۆ login (index.html).
 * ئەگەر requireAdmin=true بێت و ڕۆڵەکە admin نەبێت، دەگەڕێتەوە بۆ home.html.
 *
 * @param {{requireAdmin?: boolean}} opts
 * @returns {Promise<{uid:string, role:string, name:string, phone:string}>}
 */
export function requireStaffAuth(opts = {}) {
    const { requireAdmin = false } = opts;
    return new Promise((resolve) => {
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                goToLogin();
                return;
            }
            try {
                const staffSnap = await get(ref(db, "staff/" + user.uid));
                if (!staffSnap.exists()) {
                    // چوونەژوورەوە سەرکەوتوو بوو بەڵام هێشتا وەک ستاف تۆمار نەکراوە
                    await signOut(auth);
                    goToLogin("not-staff");
                    return;
                }
                const data = staffSnap.val();
                if (requireAdmin && data.role !== 'admin') {
                    alert("ئەم بەشە تەنها بۆ بەڕێوەبەرە. ڕۆڵی تۆ: " + (data.role || '---'));
                    window.location.href = "home.html";
                    return;
                }
                resolve({
                    uid: user.uid,
                    role: data.role || 'staff',
                    name: data.name || user.phoneNumber || 'ستاف',
                    phone: user.phoneNumber || data.phone || ''
                });
            } catch (e) {
                console.error("هەڵەی پشکنینی ستاف:", e);
                goToLogin();
            }
        });
    });
}

function goToLogin(reason) {
    const here = encodeURIComponent(location.pathname.split('/').pop());
    let url = `index.html?redirect=${here}`;
    if (reason) url += `&reason=${reason}`;
    window.location.href = url;
}

export async function logout() {
    await signOut(auth);
    window.location.href = "index.html";
}
