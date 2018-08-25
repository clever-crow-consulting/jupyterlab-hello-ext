
import {
  Widget
} from '@phosphor/widgets';

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
    console.log('extension hellolabext starting...');
    let widget: Widget = new Widget();
    widget.id = 'xkcd-jupyterlab';
    widget.title.label = 'xkcd.com';
    widget.title.closable = true;

    // Add an image element to the panel
    let img = document.createElement('img');
    widget.node.appendChild(img);

    // Fetch info about a random comic
    fetch('https:////egszlpbmle.execute-api.us-east-1.amazonaws.com/prod').then(response => {
      return response.json();
    }).then(data => {
      img.src = data.img;
      img.alt = data.title;
      img.title = data.alt;
    });

    // Add an application command
    const command: string = 'xkcd:open';
    app.commands.addCommand(command, {
      label: 'Random xkcd comic',
      execute: () => {
        if (!widget.isAttached) {
          // Attach the widget to the main work area if it's not there
          app.shell.addToMainArea(widget);
        }
        // Activate the widget
        app.shell.activateById(widget.id);
      }
    });

    // Add the command to the palette.
    palette.addItem({command, category: 'Tutorial'});
    console.log('Done.');
  }
};

export default extension;
