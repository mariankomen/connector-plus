import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['salesforce_oauth_service_script_include'],
    name: 'SalesforceOAuthService',
    apiName: 'x_peekl_peeklogi_0.SalesforceOAuthService',
    clientCallable: false,
    accessibleFrom: 'public',
    script: Now.include('../../server/services/salesforce-oauth-service.js')
})

