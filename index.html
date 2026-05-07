<!DOCTYPE html>
<html lang="ku" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#667eea">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="mobile-web-app-capable" content="yes">
    <title>بینەری داتا</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .container {
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            padding: 40px;
            max-width: 600px;
            width: 100%;
        }
        
        h1 {
            color: #333;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .login-form, .data-view {
            display: none;
        }
        
        .login-form.active, .data-view.active {
            display: block;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: bold;
        }
        
        input {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
        }
        
        input:focus {
            outline: none;
            border-color: #667eea;
        }
        
        button {
            width: 100%;
            padding: 14px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }
        
        .data-item {
            padding: 15px;
            background: #f8f9fa;
            border-radius: 8px;
            margin-bottom: 15px;
            border-right: 4px solid #667eea;
        }
        
        .data-item strong {
            color: #667eea;
            display: inline-block;
            min-width: 100px;
        }
        
        .error {
            background: #fee;
            color: #c33;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 15px;
            border-right: 4px solid #c33;
        }
        
        .loading {
            text-align: center;
            color: #667eea;
            font-size: 18px;
            padding: 20px;
        }
        
        .notification-banner {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #28a745;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10000;
            transform: translateY(-100%);
            transition: transform 0.3s ease;
        }
        
        .notification-banner.show {
            transform: translateY(0);
        }
        
        .install-banner {
            background: #667eea;
            color: white;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .install-banner button {
            margin-top: 10px;
            background: white;
            color: #667eea;
            padding: 10px 20px;
            width: auto;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="notification-banner" id="notificationBanner"></div>
    
    <div class="container">
        <div id="installBanner" class="install-banner" style="display:none;">
            <div>📱 دایبگرە بۆ سەر Home Screen</div>
            <button onclick="showInstallInstructions()">چۆن؟</button>
        </div>
        
        <div class="login-form active" id="loginForm">
            <h1>چوونەژوورەوە</h1>
            <div id="loginError"></div>
            <div class="form-group">
                <label for="userId">ID:</label>
                <input type="text" id="userId" placeholder="ID-ی خۆت بنووسە">
            </div>
            <button onclick="login()">چوونەژوورەوە</button>
        </div>
        
        <div class="data-view" id="dataView">
            <h1>داتاکانت</h1>
            <div id="dataContent"></div>
        </div>
    </div>
    
    <audio id="notificationSound" preload="auto">
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUKbh8LljHAU2kdXzzn0vBSJ1xe/glEIKElyz6OyrWBUIQ53e8LxuIgUsgs/z2oo3CBxqvvDmnE8NEE+m4u+5Yx0GNY/V8tCBMAYgccTu45ZFCxFas+ftrVsVCECb3PC7cSMGK4LO8tmJNggcab3v5ZxPDRBPpuHvuWMcBjWP1fLPgTAGIHDE7uOWRQsRWrLn7a1bFQlBm9vwu3EjBiuBzvLZiTYIHGm97+WcTg0QT6bh77ljHAY1jtXyz4EwBiBwxO7jlkULEVqy5+2tWxUJQZvb8LtxIwYrgM7y2Yk2CBxpve/lnE4NEE+m4e+5Yx0GNZDU8s+BLwYgcMTu45ZFCxFasuftrlsVCUGb2/C7cSMGK4DO8tmJNggcab3v5ZxODRBPpuHvuWMdBjSQ1PLPgS8GIHLF7uOWRQsQWrLn7a5bFQlBm9vwu3EjBiuAzvLZiTYIHGm+7+WcTg0QT6bh77hjHQY0kNTyz4EvBiByxO7jlkULEFmy5+2uWxUJQZrb8LtyIwYrfs/y2Yo2CBlpvu/mnFAOD1Cn4e+4ZB0FNI/V8s+BLwYgccXu45dGChBZsuftr1sVCUGa2/C6ciMGK37P8tmKNggZar7v5ZxPDg9Qp+LvuGQdBTSP1fLPgC8GIHLF7uOXRgoQWbLn7a9bFQlAmtvwunIjBit+z/LZijYIGWq+7+WcTw4PUKbi77hkHQU0j9Xyz4AvBiByxe7jl0YKD1iy5+2vWxUJQJrb8LpyIwYrfs/y2Yo2CBlqvu/lnE8OD1Cn4u+4ZB0FNI/V8s+ALwYgcsXu45dGCg9Ysuftrlv" type="audio/wav">
    </audio>

    <script>
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxNAR8sqXtFv14Z_gG4ICCmOwHzP2rDsgOXMR6Q3r0zkkZRC_-XFaUnwTyhpOldBCvE/exec';
        
        let currentUserId = null;
        let lastColumnD = null;
        let checkInterval = null;
        let notificationPermission = false;

        // چێککردنی یەکەمجار
        window.onload = async function() {
            console.log('App loaded');
            
            // پیشاندانی ڕێنمایی دابەزاندن
            if (!window.matchMedia('(display-mode: standalone)').matches) {
                document.getElementById('installBanner').style.display = 'block';
            }
            
            // داواکردنی ڕێگەپێدان بۆ ناوتیفیکەیشن
            if ("Notification" in window) {
                if (Notification.permission === "granted") {
                    notificationPermission = true;
                } else if (Notification.permission !== "denied") {
                    const permission = await Notification.requestPermission();
                    notificationPermission = (permission === "granted");
                    if (notificationPermission) {
                        showBanner("✓ ناوتیفیکەیشن چالاک کرا", 3000);
                    }
                }
            }
            
            // بارکردنی بەکارهێنەر هەڵگیراو
            try {
                const savedId = localStorage.getItem('userId');
                console.log('Saved ID:', savedId);
                
                if (savedId && savedId !== 'null' && savedId !== '') {
                    currentUserId = savedId;
                    document.getElementById('userId').value = savedId;
                    
                    // ڕاستەوخۆ چوونەژوورەوە
                    document.getElementById('loginForm').classList.remove('active');
                    document.getElementById('dataView').classList.add('active');
                    
                    loadUserData(savedId);
                }
            } catch (e) {
                console.error('LocalStorage error:', e);
            }
            
            // بەردەوامبوون لە پشتەوە
            document.addEventListener('visibilitychange', handleVisibilityChange);
        };

        function handleVisibilityChange() {
            if (!document.hidden && currentUserId) {
                checkForUpdates();
            }
        }

        function showInstallInstructions() {
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            const isAndroid = /Android/.test(navigator.userAgent);
            
            let message = '';
            if (isIOS) {
                message = 'بۆ iPhone/iPad:\n1. کلیک لە دوگمەی Share ⬆️\n2. هەڵبژێرە "Add to Home Screen"\n3. کلیک لە "Add"';
            } else if (isAndroid) {
                message = 'بۆ Android:\n1. کلیک لە Menu (⋮)\n2. هەڵبژێرە "Add to Home screen"\n3. کلیک لە "Add"';
            } else {
                message = 'بۆ دابەزاندن:\n- لە مۆبایل: بەکارهێنانی Menu > Add to Home screen\n- لە کۆمپیوتەر: بەکارهێنانی کلیلی Ctrl+D';
            }
            
            alert(message);
        }

        function playSound() {
            try {
                const audio = document.getElementById('notificationSound');
                audio.play().catch(e => console.log('Audio play failed:', e));
            } catch (e) {
                console.log('Audio not supported');
            }
        }

        function showBanner(message, duration = 5000) {
            const banner = document.getElementById('notificationBanner');
            banner.textContent = message;
            banner.classList.add('show');
            
            playSound();
            
            if ('vibrate' in navigator) {
                navigator.vibrate([200, 100, 200]);
            }
            
            setTimeout(() => {
                banner.classList.remove('show');
            }, duration);
        }

        function sendNotification(title, body) {
            if (!notificationPermission) return;
            
            try {
                const notification = new Notification(title, {
                    body: body,
                    icon: 'https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png',
                    badge: 'https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png',
                    vibrate: [200, 100, 200],
                    requireInteraction: true,
                    tag: 'sheet-update',
                    renotify: true
                });
                
                notification.onclick = function() {
                    window.focus();
                    this.close();
                };
            } catch (e) {
                console.log('Notification failed:', e);
            }
        }

        async function login() {
            const userId = document.getElementById('userId').value.trim();
            
            if (!userId) {
                showError('تکایە ID بنووسە');
                return;
            }
            
            showLoading();
            
            try {
                const response = await fetch(`${SCRIPT_URL}?action=getUserData&id=${userId}`);
                const data = await response.json();
                
                if (data.success) {
                    currentUserId = userId;
                    
                    // هەڵگرتنی ID بە دڵنیاییەوە
                    try {
                        localStorage.setItem('userId', userId);
                        console.log('Saved user ID:', userId);
                        
                        // دووبارە چێککردنەوە
                        const check = localStorage.getItem('userId');
                        console.log('Verified saved ID:', check);
                    } catch (e) {
                        console.error('Failed to save ID:', e);
                    }
                    
                    displayData(data.data);
                    startMonitoring();
                    showBanner('✓ سەرکەوتوو بوو - ID هەڵگیرا', 2000);
                } else {
                    showError('ID نەدۆزرایەوە');
                }
            } catch (error) {
                showError('هەڵە لە بەستنەوە');
                console.error('Error:', error);
            }
        }

        function loadUserData(userId) {
            if (!userId || userId === 'null' || userId === '') {
                console.log('No valid user ID');
                document.getElementById('dataView').classList.remove('active');
                document.getElementById('loginForm').classList.add('active');
                return;
            }
            
            showLoading();
            
            fetch(`${SCRIPT_URL}?action=getUserData&id=${userId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        displayData(data.data);
                        startMonitoring();
                        console.log('User data loaded successfully');
                    } else {
                        console.log('User not found, clearing storage');
                        localStorage.removeItem('userId');
                        currentUserId = null;
                        document.getElementById('dataView').classList.remove('active');
                        document.getElementById('loginForm').classList.add('active');
                        showError('ID نەدۆزرایەوە - تکایە دووبارە لۆگین بکە');
                    }
                })
                .catch(error => {
                    console.error('Error loading data:', error);
                    showError('هەڵە لە بارکردنی داتا');
                    // بەڵام ID-کە مەسڕەوە، بەڵکو بتوانیت دواتر دووبارە هەوڵبدەیتەوە
                });
        }

        function displayData(data) {
            document.getElementById('loginForm').classList.remove('active');
            document.getElementById('dataView').classList.add('active');
            
            let html = '';
            const columns = ['A', 'B', 'C', 'D', 'E', 'F'];
            const labels = {
                'A': 'ID',
                'B': 'کۆڵۆم B',
                'C': 'کۆڵۆم C',
                'D': 'کۆڵۆم D',
                'E': 'کۆڵۆم E',
                'F': 'مەسج'
            };
            
            columns.forEach(col => {
                if (data[col] !== undefined && data[col] !== null && data[col] !== '') {
                    html += `
                        <div class="data-item">
                            <strong>${labels[col]}:</strong> ${data[col]}
                        </div>
                    `;
                }
            });
            
            document.getElementById('dataContent').innerHTML = html;
            lastColumnD = data.D;
        }

        function startMonitoring() {
            if (checkInterval) clearInterval(checkInterval);
            checkInterval = setInterval(checkForUpdates, 30000);
        }

        async function checkForUpdates() {
            if (!currentUserId) return;
            
            try {
                const response = await fetch(`${SCRIPT_URL}?action=getUserData&id=${currentUserId}`);
                const data = await response.json();
                
                if (data.success && data.data.D !== lastColumnD && lastColumnD !== null) {
                    const newValue = data.data.D;
                    const message = `کۆڵۆم D گۆڕا بۆ: ${newValue}`;
                    
                    // پیشاندانی لە سەرەوە
                    showBanner('🔔 ' + message);
                    
                    // ناوتیفیکەیشنی سیستەم
                    sendNotification('نوێکردنەوە لە Google Sheet', message);
                    
                    lastColumnD = newValue;
                    displayData(data.data);
                }
                
                if (lastColumnD === null && data.success) {
                    lastColumnD = data.data.D;
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        function showError(message) {
            document.getElementById('loginError').innerHTML = `<div class="error">${message}</div>`;
        }

        function showLoading() {
            document.getElementById('dataContent').innerHTML = `<div class="loading">چاوەڕوان بە...</div>`;
            document.getElementById('loginError').innerHTML = '';
        }

        // بەردەوامبوون کاتی لە background
        setInterval(() => {
            if (currentUserId) {
                fetch(`${SCRIPT_URL}?action=getUserData&id=${currentUserId}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.success && data.data.D !== lastColumnD && lastColumnD !== null) {
                            checkForUpdates();
                        }
                    })
                    .catch(e => console.log('Background check failed'));
            }
        }, 60000);
    </script>
</body>
</html>
