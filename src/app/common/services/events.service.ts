import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { from } from "rxjs/observable/from";

/**
 * Service for broadcasting and subscribing to events between modules in Badgr to avoid the need for tight coupling
 * between the modules.
 */
@Injectable()
export class EventsService {
	profileEmailsChanged = new Subject<string[]>();

	/**
	 * Event when the document is clicked... Use instead of (document:click) to work around an Angular2 performance bug
	 * where multiple (document:click) handlers cause excessive change detection cycles.
	 */
	documentClicked = new Subject<MouseEvent>();

	constructor() {}
}