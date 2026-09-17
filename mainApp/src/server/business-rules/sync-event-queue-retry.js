(function executeRule(current, previous) {
    if (!current) {
        return;
    }

    var queueService = new x_peekl_peeklogi_0.SyncEventQueueService();
    queueService.processRetry(current);
})(current, previous);

