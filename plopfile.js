const { readdirSync } = require('fs');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      return { name: dirent.name, value: dirent.name };
    });
module.exports = (plop) => {
  plop.setGenerator('common component', {
    description: 'Create a common component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name',
      },
    ],
    actions: () => {
      const path = `components/common/`;
      return [
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: 'plop-templates/Component/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/index.tsx`,
          templateFile: 'plop-templates/Component/index.ts.hbs',
        },
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/stories.tsx`,
          templateFile: 'plop-templates/Component/stories.tsx.hbs',
        },
        {
          type: 'append',
          path: `${path}index.ts`,
          separator: '',
          templateFile: 'plop-templates/Component/exportAll.ts.hbs',
        },
      ];
    },
  });
  plop.setGenerator('feature component', {
    description: 'Create a feature component',
    prompts: [
      {
        type: 'list',
        name: 'componentType',
        message: 'Choose component type',
        choices: getDirectories('components/features'),
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name',
      },
    ],
    actions: (data) => {
      const path = `components/features/${data.componentType}/`;
      return [
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: 'plop-templates/Component/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/index.tsx`,
          templateFile: 'plop-templates/Component/index.ts.hbs',
        },
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/stories.tsx`,
          templateFile: 'plop-templates/Component/stories.tsx.hbs',
        },
        {
          type: 'append',
          path: `${path}index.ts`,
          separator: '',
          templateFile: 'plop-templates/Component/exportAll.ts.hbs',
        },
      ];
    },
  });
  plop.setGenerator('composable', {
    description: 'Create a composable',
    prompts: [
      {
        type: 'list',
        name: 'componentType',
        message: 'Choose component type',
        choices: getDirectories('components'),
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter composable name',
      },
    ],
    actions: (data) => {
      const path = `components/${data.componentType}/`;
      return [
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: 'plop-templates/Component/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/index.tsx`,
          templateFile: 'plop-templates/Component/index.ts.hbs',
        },
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/stories.tsx`,
          templateFile: 'plop-templates/Component/stories.tsx.hbs',
        },
        {
          type: 'append',
          path: `${path}index.ts`,
          separator: '',
          templateFile: 'plop-templates/Component/exportAll.ts.hbs',
        },
      ];
    },
  });
};
