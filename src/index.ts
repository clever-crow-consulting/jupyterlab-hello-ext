
import {
  ICommandPalette
} from '@jupyterlab/apputils';

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
  requires: [ICommandPalette],
  activate: (app: JupyterLab, palette: ICommandPalette) => {
    console.log('JupyterLab extension hellolabext is activated!');
    console.log('ICommandPalette:', palette);
  }
};

export default extension;
