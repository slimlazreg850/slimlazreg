import Swup from 'swup';
import SwupHeadPlugin from '@swup/head-plugin';

const swup = new Swup({
    plugins: [new SwupHeadPlugin({
        // Keep all orphaned tags
        persistTags: true,

        // Keep all tags that match a CSS selector
        persistTags: 'style[data-keep-style]',

        // Use a function to determine whether to keep a tag
        persistTags: (tag) => tag.children.length > 1
    })]
});
