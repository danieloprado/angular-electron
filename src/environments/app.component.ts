import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  public hero: any = {};

  // constructor() {
  //   // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
  //   childProcess.execFile(window.__dirname + '/printer/AbrafarmaPrint.exe', ['test'], (error, stdout, stderr) => {
  //     if (error) {
  //       throw error;
  //     }
  //     console.log(stdout);
  //   });

  // }
}
