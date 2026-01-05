// Wish Templates
const eventWishes = {
    general: [
        "🎆 Happy New Year 2026! May this year bring you joy, prosperity, and endless opportunities. Cheers to new beginnings and wonderful memories ahead! ✨",
        "✨ Wishing you a spectacular 2026 filled with love, laughter, and success! May all your dreams come true this year! 🎊",
        "🎉 Happy New Year! May 2026 be your best year yet, filled with happiness, health, and amazing adventures! 🌟",
        "🌟 Welcome 2026! Here's to 365 new days of possibilities, joy, and unforgettable moments. Happy New Year! 🎆",
        "🎊 Cheers to 2026! May this year bring you closer to your dreams and fill your life with beautiful moments! ✨"
    ],
    professional: [
        "🎯 Happy New Year 2026! Wishing you professional growth, successful ventures, and remarkable achievements in the coming year. Here's to reaching new heights! 📈",
        "💼 Wishing you a prosperous New Year 2026! May your career flourish and your efforts be rewarded with outstanding success! 🏆",
        "🚀 Happy New Year! May 2026 bring you innovative opportunities, successful projects, and professional excellence! 💡",
        "📊 Cheers to 2026! Wishing you strategic wins, collaborative success, and unprecedented growth in your professional journey! ✨",
        "🎯 Happy New Year 2026! May this year bring breakthrough achievements and rewarding milestones in your career! 🌟"
    ],
    family: [
        "👨‍👩‍👧‍👦 Happy New Year 2026 to the most amazing family! May our bond grow stronger and our memories become even more precious this year! ❤️",
        "💖 Wishing my wonderful family a joyous 2026! May we continue to share love, laughter, and countless beautiful moments together! 🏡",
        "🎊 Happy New Year to my dear ones! May 2026 bring us closer, fill our home with happiness, and bless us with health and prosperity! 🌟",
        "❤️ To my beloved family, Happy New Year 2026! Here's to more family gatherings, shared smiles, and treasured memories! 🎆",
        "🏡 Wishing my amazing family a blessed 2026! May our love multiply and our happiness know no bounds this year! ✨"
    ],
    romantic: [
        "💕 Happy New Year 2026, my love! Every moment with you is special, and I can't wait to create more beautiful memories together this year! 💖",
        "❤️ To my sweetheart, Happy New Year! May 2026 bring us even closer and fill our days with love, laughter, and romance! 🌹",
        "💑 Happy New Year, darling! You make every day special, and I'm excited for all the adventures 2026 has in store for us! ✨",
        "💖 Wishing you a romantic 2026, my love! Thank you for being my everything. Here's to our forever together! 💕",
        "🌹 Happy New Year to the love of my life! May 2026 strengthen our bond and fill our hearts with endless love! 💑"
    ],
    motivational: [
        "💪 Happy New Year 2026! This is your year to shine! Believe in yourself, work hard, and make your dreams a reality! 🌟",
        "🚀 Welcome 2026! Leave your doubts behind and embrace your potential. You have the power to achieve amazing things! ✨",
        "⭐ Happy New Year! 2026 is your canvas - paint it with courage, determination, and unwavering faith in yourself! 🎨",
        "🏆 Cheers to 2026! Set bold goals, take brave steps, and remember: you're capable of extraordinary things! 💯",
        "🌟 Happy New Year! May 2026 be the year you conquer your fears, chase your dreams, and become your best self! 🎯"
    ]
};

const whatsappWishes = {
    short: [
        "🎆 Happy New Year 2026! ✨\nWishing you joy and success! 🎊",
        "🌟 Cheers to 2026! 🥂\nMay all your dreams come true! ✨",
        "🎉 Happy New Year! \nHere's to an amazing 2026! 🎆",
        "✨ New Year, New Possibilities! \nHappy 2026! 🎊",
        "🎊 Wishing you a fantastic 2026! \nLet's make it memorable! 🌟"
    ],
    emoji: [
        "🎆🎉🎊 HAPPY NEW YEAR 2026! 🎊🎉🎆\n✨💫⭐ Wishing you: ⭐💫✨\n💰 Prosperity\n❤️ Love\n😊 Happiness\n🏆 Success\n🌟 Joy!\n🥂 Cheers to an amazing year! 🍾",
        "🎊 ✨ 2026 IS HERE! ✨ 🎊\n🎯 New Goals\n🚀 New Dreams  \n💪 New Energy\n🌟 New Opportunities\n🎉 Same Awesome You!\nHappy New Year! 🎆",
        "🎆 HAPPY 2026! 🎆\n🎁 May you receive:\n💖 Endless love\n💰 Great wealth\n😄 Pure joy\n🌈 Colorful moments\n✨ Magical experiences! 🎉",
        "🥳 NEW YEAR 2026! 🥳\n📅 365 days\n⏰ 8760 hours\n⚡ Infinite possibilities! ⚡\n🌟 Make them count! 💫\n🎊 Happy New Year! 🎆",
        "🌟 ✨ 2026 ✨ 🌟\n🎯 Dream Big!\n💪 Work Hard!\n❤️ Love More!\n😊 Smile Often!\n🎉 Live Fully!\nHappy New Year! 🎆🎊"
    ],
    formal: [
        "Dear Friend,\n\nWishing you a prosperous and joyful New Year 2026. May the coming year bring you success, good health, and happiness.\n\nWarm regards and best wishes! 🎆",
        "Season's Greetings!\n\nAs we welcome 2026, I extend my heartfelt wishes for your continued success and well-being. May the new year bring you abundant opportunities.\n\nBest wishes! ✨",
        "Happy New Year 2026!\n\nMay this year bring you and your loved ones peace, prosperity, and fulfillment. Wishing you all the best in your endeavors.\n\nSincerely, 🎊",
        "Warm New Year Greetings!\n\nMay 2026 be filled with professional achievements and personal happiness. Wishing you a year of growth and success.\n\nWith best wishes, 🌟",
        "Dear Friend,\n\nAs we step into 2026, I wish you a year filled with meaningful moments, good health, and prosperity. May all your aspirations come true.\n\nHappy New Year! 🎆"
    ],
    funny: [
        "🎉 Happy New Year 2026! 🎊\n\nMy New Year's resolution? 1080p! 😂\n\nJust kidding! Wishing you tons of laughter and fun this year! Let's make 2026 legendary! 🚀",
        "🎆 2026 is here! 🎆\n\nRemember: You're not getting older, you're getting more vintage! 😉🍷\n\nHere's to another year of questionable decisions and awesome memories! 😂🎊",
        "Happy New Year! 🎉\n\nMay your troubles last as long as your New Year's resolutions! 😄\n\n(Which means... about 3 days? 😂)\n\nCheers to 2026! 🥂",
        "🎊 HAPPY 2026! 🎊\n\nPro tip: Write '2025' on all your checks until March. You're welcome! 😂\n\nWishing you a year full of laughs and zero awkward moments! 🎆",
        "🎉 New Year, Same Me! 🎉\n\nBecause I'm already awesome! 😎\n\n(Okay, maybe I'll try to be less awesome to give others a chance 😂)\n\nHappy 2026! Let's rock this year! 🚀"
    ],
    heartfelt: [
        "💖 Happy New Year 2026! 💖\n\nAs we step into this new year, I want you to know how grateful I am to have you in my life. May 2026 bring you all the love, joy, and blessings you truly deserve.\n\nWith love and warm wishes! ✨",
        "🌟 Dear Friend, 🌟\n\nAs 2026 begins, I'm reminded of how special you are. Thank you for being a constant source of joy and support. May this year bring you everything your heart desires.\n\nHappy New Year! 💕",
        "💫 Happy New Year 2026! 💫\n\nYou've made such a difference in my life, and I hope this year brings you as much happiness as you've given me. Here's to cherished memories and new beginnings!\n\nWith heartfelt wishes, ❤️",
        "✨ Wishing you a blessed 2026! ✨\n\nMay this year fill your life with beautiful moments, warm friendships, and dreams coming true. Thank you for being such a wonderful part of my journey.\n\nHappy New Year! 💖",
        "🎆 Happy New Year 2026! 🎆\n\nYour friendship means the world to me. As we welcome this new year, I wish you peace, love, and all the happiness life can offer.\n\nWith gratitude and warm wishes, 🌟"
    ]
};

// Switch between tabs
function switchTab(tab) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(t => t.classList.remove('active'));
    buttons.forEach(b => b.classList.remove('active'));
    
    if (tab === 'event') {
        document.getElementById('event-tab').classList.add('active');
        buttons[0].classList.add('active');
    } else {
        document.getElementById('whatsapp-tab').classList.add('active');
        buttons[1].classList.add('active');
    }
}

// Generate Event Wish
function generateEventWish() {
    const name = document.getElementById('recipient-name').value;
    const type = document.getElementById('wish-type').value;
    const output = document.getElementById('event-output');
    
    const wishes = eventWishes[type];
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    
    let finalWish = randomWish;
    if (name.trim() !== '') {
        finalWish = `Dear ${name},\n\n${randomWish}`;
    }
    
    output.innerHTML = `<p>${finalWish.replace(/\n/g, '<br>')}</p>`;
    output.classList.add('success-animation');
    setTimeout(() => output.classList.remove('success-animation'), 1000);
}

// Generate WhatsApp Wish
function generateWhatsAppWish() {
    const name = document.getElementById('wa-recipient-name').value;
    const type = document.getElementById('wa-wish-type').value;
    const output = document.getElementById('whatsapp-output');
    
    const wishes = whatsappWishes[type];
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    
    let finalWish = randomWish;
    if (name.trim() !== '') {
        finalWish = `Hi ${name}! 👋\n\n${randomWish}`;
    }
    
    output.innerHTML = `<p>${finalWish.replace(/\n/g, '<br>')}</p>`;
    output.classList.add('success-animation');
    setTimeout(() => output.classList.remove('success-animation'), 1000);
}

// Copy to Clipboard
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        showNotification('✅ Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showNotification('❌ Failed to copy. Please try again.');
    });
}

// Download as Image (simplified version)
function downloadImage(elementId) {
    showNotification('📥 Download feature - Please take a screenshot of your wish!');
}

// Share on WhatsApp
function shareWhatsApp() {
    const text = document.getElementById('whatsapp-output').innerText;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #00FF11;
        color: #000000;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 1000;
        box-shadow: 0 5px 20px rgba(0, 255, 17, 0.5);
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎆 Viral New Year Wishes Generator Loaded!');
});
