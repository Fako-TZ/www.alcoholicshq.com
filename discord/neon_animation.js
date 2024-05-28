function neonEffect() {
    var text = document.getElementById('fancy-text');
    var colors = ['#00bfff', '#00bfff', '#00bfff', '#00bfff', '#ffffff', '#ffffff', '#ffffff']; // Adjusted colors
    var shadowBlur = 20;
    var glowIndex = 0;
    var animationInterval = 90;

    function animate() {
        text.style.textShadow = `0 0 ${shadowBlur}px ${colors[glowIndex]}`;
        glowIndex = (glowIndex + 1) % colors.length;
        setTimeout(animate, animationInterval);
    }

    animate();
}

window.onload = function() {
    neonEffect();
};
