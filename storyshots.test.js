// This plugin will run snapshot test on all storybook file.
const initStoryshots = require('@storybook/addon-storyshots').default;
const multiSnapshotWithOptions = require('@storybook/addon-storyshots').multiSnapshotWithOptions;

initStoryshots({
  test: multiSnapshotWithOptions({}),
});
