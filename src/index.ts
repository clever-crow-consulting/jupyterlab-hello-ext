import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the hellolabext extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'hellolabext',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension hellolabext is activated!');
  }
};

export default extension;
