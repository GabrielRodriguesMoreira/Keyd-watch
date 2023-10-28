

const TwitterTimeline = () => {
    const loadTwitterWidget = async () => {
        if (window.twttr) {
            await window.twttr.widgets.load();
        }
    };

    loadTwitterWidget();

    return (
        <div>
            <a
                className="twitter-timeline"
                data-theme="dark"
                data-chrome=" nofooter noborders noheader"
                href="https://twitter.com/paiNGamingBR?ref_src=twsrc%5Etfw"
            >
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
    );
};

export default TwitterTimeline;
