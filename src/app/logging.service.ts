export class LoggingService {
    logStatusChanger(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}