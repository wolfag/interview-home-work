const {MODIFY_VARS} = require ('./src/common/enum/override-css');
const {override, fixBabelImports, addLessLoader} = require ('customize-cra');

module.exports = override (
  fixBabelImports ('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader ({
    javascriptEnabled: true,
    modifyVars: MODIFY_VARS,
  })
);
