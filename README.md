<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>域名已迁移 - 正在跳转中</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #1a2a6c);
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            overflow: hidden;
        }
        
        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        .container {
            background: rgba(0, 0, 0, 0.7);
            border-radius: 20px;
            padding: 40px;
            width: 90%;
            max-width: 600px;
            text-align: center;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            overflow: hidden;
        }
        
        .container::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
            transform: rotate(30deg);
            z-index: -1;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #ff6b6b;
            text-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
        }
        
        .message {
            font-size: 1.4rem;
            margin-bottom: 30px;
            line-height: 1.6;
        }
        
        .countdown {
            font-size: 5rem;
            font-weight: bold;
            margin: 30px 0;
            color: #4ecdc4;
            text-shadow: 0 0 15px rgba(78, 205, 196, 0.7);
            position: relative;
            display: inline-block;
        }
        
        .countdown::after {
            content: '秒';
            font-size: 1.5rem;
            position: absolute;
            bottom: 10px;
            right: -45px;
        }
        
        .progress-bar {
            width: 100%;
            height: 12px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            margin: 30px 0;
            overflow: hidden;
        }
        
        .progress {
            height: 100%;
            width: 100%;
            background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
            border-radius: 10px;
            transition: width 1s linear;
        }
        
        .new-domain {
            font-size: 1.6rem;
            margin: 25px 0;
            padding: 15px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            display: inline-block;
        }
        
        .new-domain a {
            color: #4ecdc4;
            text-decoration: none;
            transition: all 0.3s;
        }
        
        .new-domain a:hover {
            color: #ff6b6b;
            text-shadow: 0 0 10px rgba(78, 205, 196, 0.7);
        }
        
        .btn {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 35px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1.2rem;
            transition: all 0.3s;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            border: none;
            cursor: pointer;
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
            background: linear-gradient(45deg, #ff5252, #3bc5bd);
        }
        
        .info {
            margin-top: 30px;
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .domain-icon {
            font-size: 4rem;
            margin-bottom: 20px;
            color: #ff6b6b;
            animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }
        
        @media (max-width: 600px) {
            .container {
                padding: 30px 20px;
                width: 95%;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            .message {
                font-size: 1.2rem;
            }
            
            .countdown {
                font-size: 4rem;
            }
            
            .new-domain {
                font-size: 1.3rem;
            }
        }
    </style>
</head>
<body>
    <div class="container pulse">
        <div class="domain-icon">
            <i class="fas fa-globe-americas"></i>
        </div>
        <h1>域名变更通知</h1>
        <p class="message">当前域名已弃用，正在跳转到新域名，请稍等...</p>
        
        <div class="countdown" id="countdown">5</div>
        
        <div class="progress-bar">
            <div class="progress" id="progress"></div>
        </div>
        
        <div class="new-domain">
            新域名：<a href="https://hjsf.uno" id="new-domain-link">https://hjsf.uno</a>
        </div>
        
        <a href="https://hjsf.uno" class="btn" id="redirect-btn">
            <i class="fas fa-external-link-alt"></i> 立即访问新网站
        </a>
        
        <p class="info">
            您将在 <span id="remaining-seconds">5</span> 秒后自动跳转到新域名<br>
            如果跳转未发生，请点击上面的按钮手动访问
        </p>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const countdownElement = document.getElementById('countdown');
            const progressElement = document.getElementById('progress');
            const remainingSeconds = document.getElementById('remaining-seconds');
            const redirectBtn = document.getElementById('redirect-btn');
            const newDomainLink = document.getElementById('new-domain-link');
            
            let seconds = 5;
            
            // 更新倒计时显示
            function updateCountdown() {
                countdownElement.textContent = seconds;
                remainingSeconds.textContent = seconds;
                
                // 更新进度条
                const progressPercent = (5 - seconds) * 20;
                progressElement.style.width = progressPercent + '%';
                
                if (seconds <= 0) {
                    // 倒计时结束，执行跳转
                    window.location.href = 'https://hjsf.uno/';
                } else {
                    seconds--;
                    setTimeout(updateCountdown, 1000);
                }
            }
            
            // 启动倒计时
            setTimeout(updateCountdown, 1000);
            
            // 为按钮添加点击事件
            redirectBtn.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'https://hjsf.uno/';
            });
            
            // 为新域名链接添加点击事件
            newDomainLink.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'https://hjsf.uno/';
            });
        });
    </script>
</body>
</html>
