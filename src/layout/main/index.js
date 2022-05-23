import renderedLayout from './main';

const context = {
    block: { className: 'layout' },
    flex: { className: 'layout -flex' }
};

export default {
    block: renderedLayout.compile(context.block),
    flex: renderedLayout.compile(context.flex)
};

