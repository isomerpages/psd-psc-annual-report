window.ga=window.ga || function () { (ga.q = ga.q || []).push(arguments) }; ga.l = +new Date;

ga('create', 'UA-139339739-1', 'auto', 't1');

ga('t1.require', 'pageVisibilityTracker', {
    sendInitialPageview: true,
});
ga('t1.require', 'outboundLinkTracker', {
    shouldTrackOutboundLink: () => true,
    events: ['click', 'auxclick', 'contextmenu']
});