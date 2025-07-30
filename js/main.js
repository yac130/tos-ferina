//audio video 
    
        document.addEventListener('DOMContentLoaded', function() {
            const video = document.querySelector('.header video');
            const playBtn = document.querySelector('.audio-controls .play-button');
            const pauseBtn = document.querySelector('.audio-controls .pause-button');
            const header = document.querySelector('.header');

            function setAudio(active) {
                video.muted = !active;
                playBtn.style.display = active ? 'none' : 'inline-block';
                pauseBtn.style.display = active ? 'inline-block' : 'none';
            }

            playBtn.addEventListener('click', function() {
                setAudio(true);
            });

            pauseBtn.addEventListener('click', function() {
                setAudio(false);
            });

            // Detect if header is out of viewport and mute audio if so
            function isHeaderInViewport() {
                const rect = header.getBoundingClientRect();
                return (
                    rect.bottom > 0 &&
                    rect.top < (window.innerHeight || document.documentElement.clientHeight)
                );
            }

            document.addEventListener('scroll', function() {
                if (!isHeaderInViewport() && !video.muted) {
                    setAudio(false);
                }
            });
        });


    // pausar videos scroll 
    
       function pauseVideosOutOfViewport() {
            const videos = document.querySelectorAll('video');
            videos.forEach(video => {
                const rect = video.getBoundingClientRect();
                const inViewport = rect.bottom > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
                if (!inViewport && !video.paused) {
                    video.pause();
                }
            });
        }

        // Escucha el scroll y ejecuta la función
        window.addEventListener('scroll', pauseVideosOutOfViewport);
   

    // slider
    
        $(document).ready(function () {
            $('.bxslider').bxSlider({
                auto: false,
                pager: true,    
                controls: false,  
                slideWidth: 800,
                responsive: true,
                adaptiveHeight: true
            });
        });
