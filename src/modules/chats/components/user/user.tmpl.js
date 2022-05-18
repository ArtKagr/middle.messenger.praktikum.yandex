export default `
    <div class="{{ userClassName }}">
        <div class="{{ avatarClassName }}"></div>
        <div class="{{ contentClassName }}">
            <span class="{{ contentTitleClassName }}">{{ contentTitleText }}</span>
            <span class="{{ contentMessageClassName }}">{{ contentMessageText }}</span>
        </div>
        <div class="{{ infoClassName }}">
            <span class="{{ infoTimeClassName }}">{{ infoTimeText }}</span>
            <span class="{{ infoNewMessageClassName }}">{{ infoNewMessageText }}</span>
        </div>
    </div>
`;
