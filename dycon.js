class DyCon {

    displayGreeting(id, darkLink, lightLink, updateTime) {
        if (!id) {
            console.error('Favicon ID is missing.');
            return;
        }

        if (!darkLink) {
            console.error('Dark favicon link is missing.');
            return;
        }

        if (!lightLink) {
            console.error('Light favicon link is missing.');
            return;
        }

        const faviconTag = document.getElementById(id);

        if (!faviconTag) {
            console.error('Favicon Id is invalid.');
            return;
        }

        const isDark = window.matchMedia("(prefers-color-scheme: dark)");
        const changeFavicon = () => {
            if (isDark?.matches) faviconTag.href = darkLink;
            else faviconTag.href = lightLink;
        };

        changeFavicon();
        if (!isNaN(updateTime)) {
            setInterval(changeFavicon, updateTime);
        }

    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = DyCon;
} else {
    window.DyCon = DyCon;
}