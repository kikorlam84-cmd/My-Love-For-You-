const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionContainer = document.getElementById('questionContainer');
const resultContainer = document.getElementById('resultContainer');
const backgroundMusic = document.getElementById('backgroundMusic');

// মিউজিক অটো প্লে করার লজিক (প্রথম ইউজার ইন্টারঅ্যাকশনে)
document.addEventListener('DOMContentLoaded', (event) => {
    // ওয়েবসাইটে প্রথমবার ক্লিক বা স্পর্শ করলে মিউজিক প্লে করবে
    document.body.addEventListener('click', () => {
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.volume = 0.6; // সাউন্ড কম রাখা হলো
            backgroundMusic.play().catch(error => {
                console.log("Audio playback failed:", error);
            });
        }
    }, { once: true });
});


// No বাটন এর লজিক: মাউস আনলেই দূরে সরে যাবে
noBtn.addEventListener('mouseover', () => {
    // কন্টেইনার এর মধ্যে র্যান্ডম নতুন X এবং Y পজিশন তৈরি করা হচ্ছে
    const containerRect = questionContainer.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // নতুন পজিশন গণনা
    const maxX = containerRect.width - btnRect.width - 20;
    const maxY = containerRect.height - btnRect.height - 20;
    
    // নিশ্চিত করুন যেন পজিশন নেগেটিভ না হয়
    const newX = Math.max(0, Math.floor(Math.random() * maxX));
    const newY = Math.max(0, Math.floor(Math.random() * maxY));
    
    // নতুন পজিশন সেট করা
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});


// Yes বাটন এর লজিক: ক্লিক করলে ফলাফল দেখাবে
yesBtn.addEventListener('click', () => {
    // প্রশ্ন লুকানো
    questionContainer.classList.add('hidden'); 
    
    // ফলাফল দেখানো
    resultContainer.classList.remove('hidden'); 
    
    // ফলাফল দেখার পর মিউজিক আরও জোরে করা যেতে পারে
    if (backgroundMusic) {
        backgroundMusic.volume = 1.0; 
    }
});
