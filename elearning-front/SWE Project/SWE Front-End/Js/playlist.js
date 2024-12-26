// Select the main video player and playlist items
const mainVideo = document.getElementById('main-video');
const playlistItems = document.querySelectorAll('.playlist-item');

// Add click event to each playlist item
playlistItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get the video source from the data attribute
        const videoSource = item.getAttribute('data-video');

        // Update the main video player's source
        mainVideo.src = videoSource;

        // Automatically play the selected video
        mainVideo.play();

        // Highlight the selected item
        playlistItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});
