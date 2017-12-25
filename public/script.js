displayChannelList(data.channels);

function channelElement(channel) {
    return $(template(`
        <div class="channel">

            <div class="channel-logo"
                 style="background-image: url('${channel.logoUrl}')"></div>

            <div class="channel-info">
                <div class="channel-name">${channel.displayName}</div>
                <div class="channel-game">${channel.stream.game}</div>
            </div>

        </div>
    `));
}

function displayChannelList(channels) {

    const listEl = $('.channel-list');

    listEl.empty();

    channels.forEach(channel => {

        const channelEl = channelElement(channel);

        channelEl.appendTo(listEl);
    });
}

function template(text) {
    return text.trim();
}