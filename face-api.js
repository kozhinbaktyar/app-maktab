import * as faceapi from 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/dist/face-api.esm.js';

// ۱. بارکردنی مۆدێلەکان
await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
await faceapi.nets.faceRecognitionNet.loadFromUri('/models');

// ۲. دەرهێنانی descriptor لە وێنەی قوتابی
async function getStudentDescriptor(imgElement) {
    const detection = await faceapi.detectSingleFace(imgElement, new faceapi.TinyFaceDetectorOptions())
                                  .withFaceLandmarks()
                                  .withFaceDescriptor();
    if (!detection) return null;
    
    // گۆڕینی Float32Array بۆ Array ئاسایی بۆ ئەوەی Firestore وەریبگرێت
    return Array.from(detection.descriptor); 
}

// ۳. پاشەکەوتکردن لە Firestore
// لە کاتی setDoc بۆ قوتابییەکە:
/*
await setDoc(doc(db, "students", studentId), {
    name: "ئەحمەد عەلی",
    class: "پۆلی ٥",
    faceDescriptor: descriptorArray // [0.123, -0.045, ...]
});
*/