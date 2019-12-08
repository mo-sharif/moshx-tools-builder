import { Injectable, ErrorHandler } from "@angular/core";
import * as Sentry from "@sentry/browser";
import { CONSTANTS } from "../../constants/configs"

Sentry.init({
  dsn: CONSTANTS.sentry
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    const eventId = Sentry.captureException(error.originalError || error);
    Sentry.showReportDialog({ eventId });
  }
}