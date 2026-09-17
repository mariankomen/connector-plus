import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    auth_route: {
                        table: 'sys_ws_operation'
                        id: 'e8803efc40ab4e819abb3f5a3f1324b2'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'cb6bb94a615c488dbcbf33fc558665ab'
                    }
                    connection_disconnect_route: {
                        table: 'sys_ws_operation'
                        id: 'f7894f6c14014814b4dd14bf74a0c18d'
                    }
                    connection_get_route: {
                        table: 'sys_ws_operation'
                        id: '04b525a3ace6438ab8d43caac7c1ef17'
                    }
                    connection_init_route: {
                        table: 'sys_ws_operation'
                        id: '5079ef1b33a94c25b56c83f2771adedf'
                    }
                    connection_status_route: {
                        table: 'sys_ws_operation'
                        id: 'f5259247ba1542cc83924878334f8730'
                    }
                    incident_manager_endpoint_ui_page_execute_acl: {
                        table: 'sys_security_acl'
                        id: 'ec871c3087344761898a940ad77437bd'
                    }
                    incident_manager_endpoint_ui_page_read_acl: {
                        table: 'sys_security_acl'
                        id: '158171bbaa4a4f29849fad178a47033f'
                    }
                    incident_manager_scoped_ui_page_execute_acl: {
                        table: 'sys_security_acl'
                        id: '0a790dfacc0546f5b702dc2caff1b79e'
                    }
                    incident_manager_scoped_ui_page_read_acl: {
                        table: 'sys_security_acl'
                        id: 'ab67da7c37014b10b3661babb49406a0'
                    }
                    incident_manager_ui_page_execute_acl: {
                        table: 'sys_security_acl'
                        id: '263f6dda0b354b4fb303fdf141ac8a1c'
                    }
                    incident_manager_ui_page_read_acl: {
                        table: 'sys_security_acl'
                        id: '7ef5854f123d4d6aa4dfb0bbda8182de'
                    }
                    modal_bundle_route: {
                        table: 'sys_ws_operation'
                        id: '46c7f2d7be0f43ff8229b3af2e808af8'
                    }
                    modal_bundle_store_route: {
                        table: 'sys_ws_operation'
                        id: 'f89ef752b25d4bdb8ed5321ad5ef4ad8'
                        deleted: true
                    }
                    modal_hello_route: {
                        table: 'sys_ws_operation'
                        id: 'e9a17233575e4248a73c2e04329ad0f4'
                        deleted: true
                    }
                    oauth_callback_route: {
                        table: 'sys_ws_operation'
                        id: '550255aa12ca4302b76260c3fa505470'
                        deleted: true
                    }
                    oauth_start_route: {
                        table: 'sys_ws_operation'
                        id: 'f91258a5d5b541f3adcb743b05ee4222'
                        deleted: true
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '32850ee707934cf6b6b565c78fd12150'
                    }
                    'peeklo-salesforce-connector-widget': {
                        table: 'sp_widget'
                        id: '6c0679e999aa48689f642c5359b0897d'
                        deleted: true
                    }
                    record_get_route: {
                        table: 'sys_ws_operation'
                        id: '24ab1cfff86e4467b29f4558ab8f4a7f'
                        deleted: true
                    }
                    salesforce_accounts_route: {
                        table: 'sys_ws_operation'
                        id: '3b1570e6bb8545e99506c9369d868688'
                        deleted: true
                    }
                    salesforce_apex_record_route: {
                        table: 'sys_ws_operation'
                        id: 'a1b2c3d4e5f64789a0b1c2d3e4f5g6h7'
                        deleted: true
                    }
                    salesforce_connection_create_acl: {
                        table: 'sys_security_acl'
                        id: 'a109ee2a08974893aa88c12dc4dc5904'
                    }
                    salesforce_connection_delete_acl: {
                        table: 'sys_security_acl'
                        id: '826bc70493134803b26f69c78545abe0'
                    }
                    salesforce_connection_read_acl: {
                        table: 'sys_security_acl'
                        id: 'd974a2019c6b406f9b020598df9342db'
                    }
                    salesforce_connection_service_script_include: {
                        table: 'sys_script_include'
                        id: 'c838d13714c54cfa87bdaf3113e2446c'
                    }
                    salesforce_connection_write_acl: {
                        table: 'sys_security_acl'
                        id: '8589a4d2183d4856b4aa605ed3da1d38'
                    }
                    salesforce_connector_ui_action: {
                        table: 'sys_ui_action'
                        id: '9113a6a691db40dda41607ba77940783'
                    }
                    salesforce_connector_widget: {
                        table: 'sp_widget'
                        id: '92dd631fc0484f209f565b8c3912b72c'
                    }
                    salesforce_create_record: {
                        table: 'sys_ws_operation'
                        id: '82b575c067d442dd9ac2591ecccfa28e'
                    }
                    salesforce_feed_route: {
                        table: 'sys_ws_operation'
                        id: 'b00142e159a8424b8cf3b1872c215fe3'
                    }
                    salesforce_fetch_record_types_route: {
                        table: 'sys_ws_operation'
                        id: 'aecf226272cc4d459d20b6943e9d6bcf'
                    }
                    salesforce_integration_api: {
                        table: 'sys_ws_definition'
                        id: 'f89faf14848b42f19978202db15ce2ca'
                    }
                    salesforce_integration_rest_endpoint_acl: {
                        table: 'sys_security_acl'
                        id: 'b364f768014a4195b6829b7c94e4bce2'
                    }
                    salesforce_layout_get_route: {
                        table: 'sys_ws_operation'
                        id: 'e5860f409bdc4bbc93861c23a911b2c2'
                        deleted: true
                    }
                    salesforce_lookup_suggestions_route: {
                        table: 'sys_ws_operation'
                        id: 'bc7b4d057d3545388fdd6f03d3bc617b'
                    }
                    salesforce_oauth_service_script_include: {
                        table: 'sys_script_include'
                        id: 'bf93a6982afa40bfb25df5d97084cf85'
                    }
                    salesforce_object_and_fileds: {
                        table: 'sys_ws_operation'
                        id: '6390b2962c2d43a6b5b159e9266da1e7'
                        deleted: true
                    }
                    salesforce_object_columns_add_route: {
                        table: 'sys_ws_operation'
                        id: '9195bd100af6475d83568bc05ee03242'
                    }
                    salesforce_object_columns_clear_route: {
                        table: 'sys_ws_operation'
                        id: '7a22f1566777459c9615761f037a49fd'
                        deleted: true
                    }
                    salesforce_object_columns_create_acl: {
                        table: 'sys_security_acl'
                        id: '7f7633e9870347ae86e4abb56b713e24'
                    }
                    salesforce_object_columns_delete_acl: {
                        table: 'sys_security_acl'
                        id: '44c43822dda04c689282b82f352f308d'
                    }
                    salesforce_object_columns_get_route: {
                        table: 'sys_ws_operation'
                        id: '123a674b936c48adab1387260ce82fc7'
                    }
                    salesforce_object_columns_get_saved_route: {
                        table: 'sys_ws_operation'
                        id: 'f4dd6a36a62f42158d1fb8d4769c467a'
                    }
                    salesforce_object_columns_read_acl: {
                        table: 'sys_security_acl'
                        id: '70aead6a7f144ca3ae804b73da75fb26'
                    }
                    salesforce_object_columns_write_acl: {
                        table: 'sys_security_acl'
                        id: '510c0adef1de41099992aea730782f6c'
                    }
                    salesforce_object_config_create_acl: {
                        table: 'sys_security_acl'
                        id: '059bf7d01c754638a61e236113d85af0'
                    }
                    salesforce_object_config_delete_acl: {
                        table: 'sys_security_acl'
                        id: '77af67563dcf4734804045a84f78c400'
                    }
                    salesforce_object_config_read_acl: {
                        table: 'sys_security_acl'
                        id: '1072f66a096e4678a4174af3426e7bdb'
                    }
                    salesforce_object_config_write_acl: {
                        table: 'sys_security_acl'
                        id: '6016e6ccb48a4cbdadf5eb8f0809e0f5'
                    }
                    salesforce_object_describe_get_route: {
                        table: 'sys_ws_operation'
                        id: 'f45dffc2a0434137937f75b6cc98f55b'
                    }
                    salesforce_object_describe_route: {
                        table: 'sys_ws_operation'
                        id: '0f8b16dceb604ed2875946b213d0acad'
                        deleted: true
                    }
                    salesforce_object_details: {
                        table: 'sys_ws_operation'
                        id: 'db4dc7dbb92149f28705d52f51841d30'
                    }
                    salesforce_object_layout_route: {
                        table: 'sys_ws_operation'
                        id: '03b416ada603465788265b6f3c7d8c20'
                    }
                    salesforce_object_service_script_include: {
                        table: 'sys_script_include'
                        id: '2b97645d713b4000973acba843476db3'
                    }
                    salesforce_objects_with_advanced_fields_route: {
                        table: 'sys_ws_operation'
                        id: 'befd1828b6db44a4abe28ca6e2e9c499'
                        deleted: true
                    }
                    salesforce_objects_with_record_types_route: {
                        table: 'sys_ws_operation'
                        id: 'af32b12c6b0e4314a4fd0d4d5ff75227'
                        deleted: true
                    }
                    salesforce_org_settings_get: {
                        table: 'sys_ws_operation'
                        id: '8de8de54638d4007be0d228d07e3e446'
                    }
                    salesforce_parameterized_search_route: {
                        table: 'sys_ws_operation'
                        id: '8d03bf7325c343bcbd7bf1f2147a7240'
                        deleted: true
                    }
                    salesforce_query_route: {
                        table: 'sys_ws_operation'
                        id: '8f0b1b213d9f4e89a296f0107fee4d76'
                        deleted: true
                    }
                    salesforce_record_details_route: {
                        table: 'sys_ws_operation'
                        id: '30998113abf14d2c9ab96ad02882773e'
                        deleted: true
                    }
                    salesforce_record_link_create_acl: {
                        table: 'sys_security_acl'
                        id: '86bca412c2584b2cb9c710456f009df9'
                        deleted: true
                    }
                    salesforce_record_link_delete_acl: {
                        table: 'sys_security_acl'
                        id: '485ac443fe0a49cb98ecb27d4cfb31c0'
                        deleted: true
                    }
                    salesforce_record_link_delete_route: {
                        table: 'sys_ws_operation'
                        id: 'dcfd21e3760f43cfb190e0fe1f84c57e'
                    }
                    salesforce_record_link_get_route: {
                        table: 'sys_ws_operation'
                        id: 'd6e35ae2d9004c24968b7863ea2012bd'
                    }
                    salesforce_record_link_post_route: {
                        table: 'sys_ws_operation'
                        id: '2ae5bb32304c41fcb3fe77ff8b4f73c8'
                        deleted: true
                    }
                    salesforce_record_link_read_acl: {
                        table: 'sys_security_acl'
                        id: 'a63ebf7f944f49c0b2257f541e12649b'
                        deleted: true
                    }
                    salesforce_record_link_write_acl: {
                        table: 'sys_security_acl'
                        id: '95f6524de74a4e49b0835a8f2fe42d07'
                        deleted: true
                    }
                    salesforce_related_object_columns_create_acl: {
                        table: 'sys_security_acl'
                        id: 'd5330e78cb1e4f658f79b9adb1964d0a'
                    }
                    salesforce_related_object_columns_delete_acl: {
                        table: 'sys_security_acl'
                        id: '71b63c89540b49dc8a87bc5e925fcf4d'
                    }
                    salesforce_related_object_columns_read_acl: {
                        table: 'sys_security_acl'
                        id: '935dfea10f1a4d72b58a64cb363c21f3'
                    }
                    salesforce_related_object_columns_write_acl: {
                        table: 'sys_security_acl'
                        id: '2228680cfe064097b77843fd60bec6fa'
                    }
                    salesforce_related_objects_columns_route: {
                        table: 'sys_ws_operation'
                        id: 'a8a0a2a755874f5f879aa8dcc276e106'
                    }
                    salesforce_related_objects_columns_select_route: {
                        table: 'sys_ws_operation'
                        id: '6160fa64c03647e89a00323b72f230d3'
                    }
                    salesforce_related_objects_route: {
                        table: 'sys_ws_operation'
                        id: 'f8f85dbf4109409c9183cd6545a23777'
                    }
                    salesforce_related_objects_select_route: {
                        table: 'sys_ws_operation'
                        id: '3a83c92bd1234b328b8e86a1eba650be'
                    }
                    salesforce_related_records_route: {
                        table: 'sys_ws_operation'
                        id: '49e48abc97f24f278e7f9c3b204cef60'
                    }
                    salesforce_search_all_route: {
                        table: 'sys_ws_operation'
                        id: '38a5bb63af154b969257ad6c8ec53781'
                    }
                    salesforce_search_layouts_route: {
                        table: 'sys_ws_operation'
                        id: '5ef398f5fccb4368b9f2762b7a0647f7'
                        deleted: true
                    }
                    salesforce_selected_related_objects_create_acl: {
                        table: 'sys_security_acl'
                        id: 'cedef8b702514a428835236683c457d9'
                    }
                    salesforce_selected_related_objects_delete_acl: {
                        table: 'sys_security_acl'
                        id: 'cddc343838ef4554aded62cbf28f5841'
                    }
                    salesforce_selected_related_objects_read_acl: {
                        table: 'sys_security_acl'
                        id: '3214b3aff88949c9ac50e47d284096dd'
                    }
                    salesforce_selected_related_objects_write_acl: {
                        table: 'sys_security_acl'
                        id: '44d828f4b8044f51ace0f9897252fb5a'
                    }
                    salesforce_sobjects_route: {
                        table: 'sys_ws_operation'
                        id: 'fc182af1356048a69572b187b4967f27'
                    }
                    salesforce_sync_post: {
                        table: 'sys_ws_operation'
                        id: 'c418ec9f06ac482dafa9845cd02f88b7'
                    }
                    'salesforce-object-config-cascade-delete-rule': {
                        table: 'sys_script'
                        id: '2a39d8060cdd43f7886b95111f4c6c50'
                    }
                    'salesforce-related-object-cascade-delete-rule': {
                        table: 'sys_script'
                        id: '3b6925ea3929498d954e0a21ecd84233'
                    }
                    servicenow_page_endpoint_ui_page_execute_acl: {
                        table: 'sys_security_acl'
                        id: '84cb5926479445ca95d3cdd98f806ef0'
                    }
                    servicenow_page_endpoint_ui_page_read_acl: {
                        table: 'sys_security_acl'
                        id: '1ec7e6d6d2e848459d30f3f3d9f004c9'
                    }
                    servicenow_page_ui_page_execute_acl: {
                        table: 'sys_security_acl'
                        id: 'fe25212b1a194a6e9b038a7e8e41284c'
                    }
                    servicenow_page_ui_page_read_acl: {
                        table: 'sys_security_acl'
                        id: '19cb4ace6daa4e3ab281bf218ae5faed'
                    }
                    sf_object_config_add_route: {
                        table: 'sys_ws_operation'
                        id: 'f13435c7719044ebae61d97eb63282b3'
                    }
                    sf_object_config_delete_batch_route: {
                        table: 'sys_ws_operation'
                        id: 'c5719b3b408345ef8a0162174be47340'
                    }
                    sf_object_config_delete_route: {
                        table: 'sys_ws_operation'
                        id: 'a3dd9b22d2c44c60af81b5b93a92ffa4'
                        deleted: true
                    }
                    sf_object_config_list_route: {
                        table: 'sys_ws_operation'
                        id: '736fae61d8c14fa0956cf158082a96e8'
                    }
                    sf_object_config_update_route: {
                        table: 'sys_ws_operation'
                        id: '1830498b4c2d43b7a380521b7a8b5251'
                        deleted: true
                    }
                    src_server_assets_peeklo_modal_bundle_js: {
                        table: 'sys_module'
                        id: '93aff7afd6a04952a2f062c93fa721fb'
                        deleted: true
                    }
                    'src_server_business-rules_salesforce-object-config-cascade-delete_js': {
                        table: 'sys_module'
                        id: '6b457bc6dfa54c0cb6adf087a71a08f9'
                    }
                    'src_server_business-rules_salesforce-related-object-cascade-delete_js': {
                        table: 'sys_module'
                        id: 'e58438073cba467e8e224f909073f666'
                    }
                    'src_server_business-rules_sync-event-queue-create_js': {
                        table: 'sys_module'
                        id: 'bc7801ff147c4db58c63c8ccc866dde7'
                    }
                    'src_server_business-rules_sync-event-queue-retry_js': {
                        table: 'sys_module'
                        id: '3b3026eb9c074d78af032bf3d5bfe9ec'
                    }
                    'src_server_business-rules_task-sync-create_js': {
                        table: 'sys_module'
                        id: '5ffc861e9745415aad3980b349bf2da7'
                    }
                    'src_server_business-rules_task-sync-delete_js': {
                        table: 'sys_module'
                        id: '040ca1e854c844fe8f0d2dc0fd3ac6ec'
                    }
                    'src_server_business-rules_task-sync-update_js': {
                        table: 'sys_module'
                        id: '845fec63f26e4e959af7288a013831d5'
                    }
                    'src_server_connection-disconnect-post_js': {
                        table: 'sys_module'
                        id: '9fb806fac4df4b1ebdd8aaaed348c182'
                    }
                    'src_server_connection-get_js': {
                        table: 'sys_module'
                        id: '9c3714333b004adda3b77c9aacb1a270'
                    }
                    'src_server_connection-init-post_js': {
                        table: 'sys_module'
                        id: 'c472b57c75104466adb8ace4aa56d922'
                    }
                    'src_server_connection-status-get_js': {
                        table: 'sys_module'
                        id: '131d344cb7bf49c39e320b2e9d58d491'
                    }
                    'src_server_modal-bundle_payload_js': {
                        table: 'sys_module'
                        id: 'aa901a0d292241bbb62d5e0caf3d18b6'
                        deleted: true
                    }
                    'src_server_modal-bundle-get_js': {
                        table: 'sys_module'
                        id: 'fcb06635b94a4469817e22afa4946a94'
                    }
                    'src_server_modal-bundle-store-post_js': {
                        table: 'sys_module'
                        id: 'a52f7310d0124e6c924cf48d2c1e59d9'
                        deleted: true
                    }
                    'src_server_modal-hello-get_js': {
                        table: 'sys_module'
                        id: '36f4fd327a4c4f46a558859d453c5b65'
                        deleted: true
                    }
                    'src_server_oauth-callback-get_js': {
                        table: 'sys_module'
                        id: 'b4644413a34d461cad506db650cdd28e'
                        deleted: true
                    }
                    'src_server_oauth-start-get_js': {
                        table: 'sys_module'
                        id: '9408312dee0149638586bfc324c04907'
                        deleted: true
                    }
                    'src_server_record-get_js': {
                        table: 'sys_module'
                        id: '113a7da944464fa5a66891665aa4f1f7'
                        deleted: true
                    }
                    'src_server_related-objects-get_js': {
                        table: 'sys_module'
                        id: '8232cdf44c284d7499700cd9e891d8e2'
                    }
                    'src_server_salesforce-accounts-get_js': {
                        table: 'sys_module'
                        id: '74eac92b8d2445768acb0bfd91d82c9e'
                        deleted: true
                    }
                    'src_server_salesforce-apex-record-get_js': {
                        table: 'sys_module'
                        id: '1f882e17667941d98f113faf0c7eeae9'
                        deleted: true
                    }
                    'src_server_salesforce-auth-post_js': {
                        table: 'sys_module'
                        id: '87b5847684224fbc93784f5f50e4d7b8'
                    }
                    'src_server_salesforce-create-record_js': {
                        table: 'sys_module'
                        id: 'ec19a4a2de0c4ec6bf5444d58ad2e7f8'
                    }
                    'src_server_salesforce-describe-get_js': {
                        table: 'sys_module'
                        id: '08f5a12615de412293d4e0358e4e99b2'
                        deleted: true
                    }
                    'src_server_salesforce-feed_js': {
                        table: 'sys_module'
                        id: 'd9d75578874c4021aa199ce2ddbd63be'
                    }
                    'src_server_salesforce-layout-get_js': {
                        table: 'sys_module'
                        id: 'd0082f4e0c74476186bca96faf91f80e'
                        deleted: true
                    }
                    'src_server_salesforce-lookup-suggestions-get_js': {
                        table: 'sys_module'
                        id: '0ad890859da14fea9c8c5a25374e0445'
                    }
                    'src_server_salesforce-object-column-add-post_js': {
                        table: 'sys_module'
                        id: 'c07c95d946e645b59b0b33d2a2f9e7d3'
                    }
                    'src_server_salesforce-object-column-saved-get_js': {
                        table: 'sys_module'
                        id: '9a4abff16f664eada1e90f0d77c378a5'
                    }
                    'src_server_salesforce-object-columns-clear-post_js': {
                        table: 'sys_module'
                        id: 'eccb8a8a08ab4ac5aa521de7978f5939'
                        deleted: true
                    }
                    'src_server_salesforce-object-describe-get_js': {
                        table: 'sys_module'
                        id: 'd3137c15cacb462f8e96f9cde026187b'
                    }
                    'src_server_salesforce-object-detail_js': {
                        table: 'sys_module'
                        id: 'f625e584e3fd4d6fa7f75f8f8b9b58d7'
                    }
                    'src_server_salesforce-object-fields-list_js': {
                        table: 'sys_module'
                        id: '1a45c480019a4d7d8e884fc98c903b99'
                        deleted: true
                    }
                    'src_server_salesforce-object-get-columns_js': {
                        table: 'sys_module'
                        id: 'a4c122fabb6849daaff3ca610aabff04'
                    }
                    'src_server_salesforce-object-layout-get_js': {
                        table: 'sys_module'
                        id: 'bee010807c324df3a71bf72ab3b6feed'
                    }
                    'src_server_salesforce-objects-with-advanced-fields-get_js': {
                        table: 'sys_module'
                        id: '92983fde2b014635b8c7979c361bc9a6'
                        deleted: true
                    }
                    'src_server_salesforce-objects-with-record-types-get_js': {
                        table: 'sys_module'
                        id: '80d5693ff230482caf9ff2f452bd7ca5'
                        deleted: true
                    }
                    'src_server_salesforce-org-settings-get_js': {
                        table: 'sys_module'
                        id: 'cbab7a9a9322437eb64129110108dda9'
                    }
                    'src_server_salesforce-parameterized-search-post_js': {
                        table: 'sys_module'
                        id: '7588d21495b94c5395be7fbfbe52ea3d'
                        deleted: true
                    }
                    'src_server_salesforce-query-get_js': {
                        table: 'sys_module'
                        id: 'b00516104a074d60adf3a14ba46f8ac2'
                        deleted: true
                    }
                    'src_server_salesforce-record-details-get_js': {
                        table: 'sys_module'
                        id: 'dacb605813e44be0bce1644425b6c87e'
                        deleted: true
                    }
                    'src_server_salesforce-record-link-delete-post_js': {
                        table: 'sys_module'
                        id: '0d3903514b924aa282fa1291ce3bcc92'
                    }
                    'src_server_salesforce-record-link-get_js': {
                        table: 'sys_module'
                        id: '62d5798b8ca54423a9ac5c98ccedd86b'
                    }
                    'src_server_salesforce-record-link-post_js': {
                        table: 'sys_module'
                        id: '25064292d8004c6e8c220a8237698102'
                        deleted: true
                    }
                    'src_server_salesforce-record-types-get_js': {
                        table: 'sys_module'
                        id: '62f74efd2e4b4b1283798b9aac890d6a'
                    }
                    'src_server_salesforce-related-object-column-select_js': {
                        table: 'sys_module'
                        id: '049f9d3578ca4189a385bd5ee1fb17c1'
                    }
                    'src_server_salesforce-related-objects-columns-get_js': {
                        table: 'sys_module'
                        id: '9b4b81204db546f7bac5f22b4fe763da'
                    }
                    'src_server_salesforce-related-objects-select-post_js': {
                        table: 'sys_module'
                        id: '8b7266e43ad148fc89e861730f5fe162'
                    }
                    'src_server_salesforce-related-records-get_js': {
                        table: 'sys_module'
                        id: '1c1a726eace04dbd87c7ba5f5b744dd5'
                    }
                    'src_server_salesforce-search-all-post_js': {
                        table: 'sys_module'
                        id: 'ba1cfb918d0f465583124cc270519d76'
                    }
                    'src_server_salesforce-search-layouts-get_js': {
                        table: 'sys_module'
                        id: '6c8a63141aa34c419f896e6aba4a4e35'
                        deleted: true
                    }
                    'src_server_salesforce-sobjects-get_js': {
                        table: 'sys_module'
                        id: '0f89830670da466e971b0048dfedfc0d'
                    }
                    'src_server_salesforce-sync-post_js': {
                        table: 'sys_module'
                        id: 'b2c098285f214887b27d525034628d6a'
                    }
                    'src_server_services_salesforce-connection-service_js': {
                        table: 'sys_module'
                        id: 'e69235ac0d4e40ff8ba4a957994f647f'
                    }
                    'src_server_services_salesforce-oauth-service_js': {
                        table: 'sys_module'
                        id: 'f1f1c704a018431fa3a3a39c75b774a8'
                    }
                    'src_server_services_salesforce-object-service_js': {
                        table: 'sys_module'
                        id: 'e07c6133e51f40ee973e1f48f8497a54'
                    }
                    'src_server_services_sync-event-queue-service_js': {
                        table: 'sys_module'
                        id: '745183af68434541a209d32aa825595b'
                    }
                    'src_server_services_task-sync-service_js': {
                        table: 'sys_module'
                        id: '74ee9873f82f4eaea72d8376025199d6'
                    }
                    'src_server_sf-objects-config-delete_js': {
                        table: 'sys_module'
                        id: '9098d86095a44b8b948291b18b966376'
                        deleted: true
                    }
                    'src_server_sf-objects-config-delete-batch-post_js': {
                        table: 'sys_module'
                        id: '14d76ca832ff4ecf9bff3ff4ebd877ac'
                    }
                    'src_server_sf-objects-config-get_js': {
                        table: 'sys_module'
                        id: 'a1cc78ac72f945ee9496d9e26c2a6caf'
                    }
                    'src_server_sf-objects-config-post_js': {
                        table: 'sys_module'
                        id: '5da61561dcbf4b15822a62164a12ef4a'
                    }
                    'src_server_sf-objects-config-put_js': {
                        table: 'sys_module'
                        id: 'bdd786ce44dc4709804ce6b8e9bbbe2e'
                        deleted: true
                    }
                    'src_server_sp-widgets_peeklo-salesforce-connector-sp-client_js': {
                        table: 'sys_module'
                        id: 'd7008104e60945e7b5b28807c0308461'
                    }
                    'src_server_sp-widgets_peeklo-salesforce-connector-sp-server_js': {
                        table: 'sys_module'
                        id: 'b2555fd14b734688ad18967f2087ed2a'
                    }
                    'src_server_task-type-config-get_js': {
                        table: 'sys_module'
                        id: 'd59ed20d2f0041b4812e055b4e9310ae'
                    }
                    'src_server_task-type-config-put_js': {
                        table: 'sys_module'
                        id: '2decbf64c7264811ac895e3058ff705e'
                    }
                    'src_server_task-types-get_js': {
                        table: 'sys_module'
                        id: '6790abfac76f46c485940eb0d2b17d56'
                    }
                    sync_config_create_acl: {
                        table: 'sys_security_acl'
                        id: 'b989f89e623f40fd835683e2b4db5ba6'
                    }
                    sync_config_delete_acl: {
                        table: 'sys_security_acl'
                        id: 'eb54e8fe28874d5d89d44330cefe56b0'
                    }
                    sync_config_read_acl: {
                        table: 'sys_security_acl'
                        id: 'b7fd07abe420493e8e6707cdf5ced829'
                    }
                    sync_config_write_acl: {
                        table: 'sys_security_acl'
                        id: '353a7cc0e9c34f2184f7b7070fcb7c4a'
                    }
                    sync_event_queue_create_acl: {
                        table: 'sys_security_acl'
                        id: 'ee3853f842c045539cdd25bd3274a691'
                    }
                    sync_event_queue_create_rule: {
                        table: 'sys_script'
                        id: 'b87b686210e94dee83159b4329907f54'
                    }
                    sync_event_queue_delete_acl: {
                        table: 'sys_security_acl'
                        id: '0406ed68e11b4ae0b11abf1a8061f04a'
                    }
                    sync_event_queue_read_acl: {
                        table: 'sys_security_acl'
                        id: '4e550809e59848e6a77cc8d0f9d90b37'
                    }
                    sync_event_queue_retry_rule: {
                        table: 'sys_script'
                        id: '97f88fdbd8794b07a722699d50cadcc6'
                    }
                    sync_event_queue_service_script_include: {
                        table: 'sys_script_include'
                        id: 'ebbe711e6c2a4eeb88a9a72437035a03'
                    }
                    sync_event_queue_write_acl: {
                        table: 'sys_security_acl'
                        id: 'e333032675a945218efb342d7f0a112f'
                    }
                    task_sync_create_rule: {
                        table: 'sys_script'
                        id: '32892a242c5343f9afcf68b382dc8dcd'
                    }
                    task_sync_delete_rule: {
                        table: 'sys_script'
                        id: '4ad931ab2d4e4611bdfd879d9a5545f1'
                    }
                    task_sync_service_script_include: {
                        table: 'sys_script_include'
                        id: '1e38a0a20d4f48a7a6780cf1030316ce'
                    }
                    task_sync_update_rule: {
                        table: 'sys_script'
                        id: 'a46928fd1e4046069a0aa72b4b70f092'
                    }
                    task_type_config_create_acl: {
                        table: 'sys_security_acl'
                        id: 'cff92882ebfd4318a272e028c717c11b'
                    }
                    task_type_config_delete_acl: {
                        table: 'sys_security_acl'
                        id: '0babf7d91e13480bb7c0b134252a9bff'
                    }
                    task_type_config_get_route: {
                        table: 'sys_ws_operation'
                        id: 'b86df6cdc3f24e7ebefadab2f7c7e5fd'
                    }
                    task_type_config_put_route: {
                        table: 'sys_ws_operation'
                        id: 'cb38b22aabdc44be89f7e3abd4e62a40'
                    }
                    task_type_config_read_acl: {
                        table: 'sys_security_acl'
                        id: 'e8cf4e7aa9064bb499a3412d73a46f47'
                    }
                    task_type_config_write_acl: {
                        table: 'sys_security_acl'
                        id: 'da23e2e87c414d57afc992d30ef3f6a9'
                    }
                    task_types_route: {
                        table: 'sys_ws_operation'
                        id: '07d386cf34e146c5bbb42bfcead8d1ac'
                    }
                    x_peekl_peeklogi_0_app_menu: {
                        table: 'sys_app_application'
                        id: 'e936c5c8b79a482d950a6752ba54a84f'
                    }
                    x_peekl_peeklogi_0_app_module: {
                        table: 'sys_app_module'
                        id: '36e7e30641fb44bb9db4b86ceed4657e'
                    }
                    x_peekl_peeklogi_0_privacy_module: {
                        table: 'sys_app_module'
                        id: '15126913b97b4bcf98e456e3056d8d63'
                    }
                    x_peekl_peeklogi_0_support_module: {
                        table: 'sys_app_module'
                        id: '6a1105c0018e41829f6142eb1daa484e'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '000bf7f305d94c4dbb2af1f97d243ed5'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'salesforce_user_id'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '000d893e7df443b383f7eb7571ffa031'
                        key: {
                            sys_security_acl: 'b7fd07abe420493e8e6707cdf5ced829'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '006e5fd5ba2542fba407170f930dd5c9'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'client_secret'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '02d9d04af8054e199e3cc2abab689188'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'created_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03173ee31ba34357a84bce75f5e00274'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'sync_delete'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '057345545560436f86c658a15e8e6cea'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_record_link'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '05d8a3858975473782009f6b211afcc3'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'sync_update'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b3afd95e77342359cb4e02d6644c0e3'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_related_object_columns'
                            element: 'selected_related_object'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0d5ef94616de4e69b61baa06741e2abf'
                        key: {
                            sys_security_acl: 'ec871c3087344761898a940ad77437bd'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d76c2d383aa4837be6ae9003be3a781'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                            element: 'sf_object_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '0da3dbf189cb4fadae394d88bfd9a81b'
                        key: {
                            name: 'x_peekl_peeklogi_0_task_type_config'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0e92c2267da74845a8509c1bba60a013'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_record_link'
                            element: 'sf_record_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ed1f2703bd7495988a5823346f0816f'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0eea507f58034d0a8d37a8650a8ad6b4'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_event_queue'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0fa2fd50658c444b8a53749f16bbb31f'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_event_queue'
                            element: 'error_message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0ffc85a2f1fc42e99ea98cee483ca455'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_columns'
                            element: 'column_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '104d6eb03de64087a91a08e64ec3ded5'
                        key: {
                            sys_security_acl: '353a7cc0e9c34f2184f7b7070fcb7c4a'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '11761ccb06724a20a7aa43f650f805dd'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_columns'
                            element: 'column_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '15786c9489da450d942690b74b507b04'
                        key: {
                            sys_security_acl: 'cff92882ebfd4318a272e028c717c11b'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '15e713d1753849aaa11a496e7ca468a5'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_selected_related_objects'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1796b60f616b48159d062d7c694474f4'
                        key: {
                            sys_security_acl: 'da23e2e87c414d57afc992d30ef3f6a9'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '185f57e239b648d7870c996cb04fd447'
                        key: {
                            endpoint: 'x_peekl_peeklogi_0_ServiceNowPage.do'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '188236f2763241fdb17826c032f9bca1'
                        key: {
                            sys_security_acl: '1ec7e6d6d2e848459d30f3f3d9f004c9'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '18e2e94d5e1c4902887654df09483a3a'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'work_item_types'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '191fe1e65a23434ba98013dd37da44bb'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_columns'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1b56dde89f374f21a8476bb68b5784dc'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_modal_bundle_storage'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '1c2ec94470754fa3b79d9a4cb9c4aeea'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_record_link'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1c316250e7654ad8a87fc49bb3b80929'
                        deleted: true
                        key: {
                            sys_security_acl: 'a63ebf7f944f49c0b2257f541e12649b'
                            sys_user_role: {
                                id: '2c07d35b35fa4efdbff05a990668424f'
                                key: {
                                    name: 'x_peekl_peeklogi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1f060f4d674040078bb50d82cc072f56'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                            element: 'sf_object_label'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1f3558145a844a47aa297deef48f8b6a'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'access_token_expires_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1f5de3a7b88c4be68a84c8189898bbea'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_columns'
                            element: 'object_config'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1f862816017d463ea47831dffb23931e'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'client_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1fb696fc7d4b4fdeb19d62b1b65e2b47'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_record_link'
                            element: 'sf_record_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2014f31799c74e2baee9bbcdbd93c56a'
                        key: {
                            sys_security_acl: '0406ed68e11b4ae0b11abf1a8061f04a'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '20aafd3911264630833ccf178521fc1c'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_modal_bundle_storage'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '21955a43eb1d4a3294fb4f76234e770c'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'project'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2318e504228747a2848a33dacda6034d'
                        key: {
                            sys_security_acl: '0babf7d91e13480bb7c0b134252a9bff'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '263213261b704f78bbde96df5f7038a4'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '276236dd585e4dc695c4c66d43caf1c9'
                        deleted: true
                        key: {
                            sys_security_acl: '485ac443fe0a49cb98ecb27d4cfb31c0'
                            sys_user_role: {
                                id: 'a763c91ec9014ec091f657d2da543d61'
                                key: {
                                    name: 'x_peekl_peeklogi_0.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a8bd0441c1544ba992cb640da7155db'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'work_item_types'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2cc2af2611fa47e7a436ca0f17462008'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_related_object_columns'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2e5aa44fbd444621a9943c3fab2afe0e'
                        key: {
                            sys_security_acl: '263f6dda0b354b4fb303fdf141ac8a1c'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '2eac82047ca04eaebc7fa0a2130852d9'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_columns'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '311d15a69654469fa63679ab101e67d7'
                        deleted: true
                        key: {
                            sys_security_acl: '86bca412c2584b2cb9c710456f009df9'
                            sys_user_role: {
                                id: 'be907dbf52b9491cb3aefbd7f5c9ddf7'
                                key: {
                                    name: 'salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '31b38dd85c1547d6b92e3e409feebbf5'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_columns'
                            element: 'column_name'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '31df272f785b4b34bf80afaaba57b3bd'
                        deleted: true
                        key: {
                            sys_security_acl: '485ac443fe0a49cb98ecb27d4cfb31c0'
                            sys_user_role: {
                                id: 'f6382f3ad0e94075823457f7ca390aed'
                                key: {
                                    name: 'salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '32538ecf9d464075a853c6ae660e7847'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '362233f8f8874f95aee495f76372cb30'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'redirect_uri'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '370be0fb1ff748cd8c1cf9cc37ba2b17'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '380765abeaa8459681a9faa70957ead4'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'refresh_token'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '39d319d548f5442e993698a7f5a4ed70'
                        key: {
                            sys_ui_action: '9113a6a691db40dda41607ba77940783'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3a6b0a1609204b7fafc2898a60f44031'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_selected_related_objects'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3a8f3cb77fbe42edb89a0cc33811495c'
                        deleted: true
                        key: {
                            sys_security_acl: '485ac443fe0a49cb98ecb27d4cfb31c0'
                            sys_user_role: {
                                id: '0a2133816f1543beaa71b2dd8b506a94'
                                key: {
                                    name: 'x_peekl_peeklogi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3bbc3dbfb0cd4f3b9e12ebdff5696c46'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'connection_ref'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3da35451da6a4ec2b5c1fd2bc8e0ba50'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                            element: 'searchable'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '433b6bcf04b147598be34d192f02c698'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'created_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '43b326826c03468d86edf54ba85f1e86'
                        deleted: true
                        key: {
                            sys_security_acl: '95f6524de74a4e49b0835a8f2fe42d07'
                            sys_user_role: {
                                id: '65997eb5e10a4116aa74c212a7b447d1'
                                key: {
                                    name: 'salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '460d6f780d54472ea5dc8fc093551e66'
                        deleted: true
                        key: {
                            sys_security_acl: '86bca412c2584b2cb9c710456f009df9'
                            sys_user_role: {
                                id: '2dd97156fa1c41c5aac0b9ef1ca1cc2f'
                                key: {
                                    name: 'x_peekl_peeklogi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '465e7bd2415f49cc8eea43155f97e80b'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_event_queue'
                            element: 'error_message'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '46c66eb4e5384b529d957bbf6c8189b0'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'instance_url'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4782fdf3eeb0437ab18ec1662755a75f'
                        key: {
                            name: 'x_peekl_peeklogi_0_task_type_config'
                            element: 'connection_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '49e64d106c3d4bb3ab376f2f5a1beedc'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_columns'
                            element: 'object_config'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4bda78856444410bb9e13d2b7c7426a0'
                        key: {
                            sys_security_acl: 'b364f768014a4195b6829b7c94e4bce2'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d06b65c096c4ecd9a58d83f52ef39c9'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_columns'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4deb6f06d0fa498c8dc6752921692614'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_columns'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4dec99b7e6d74280b25382b77284667b'
                        key: {
                            sys_security_acl: '19cb4ace6daa4e3ab281bf218ae5faed'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4dfa02c857384a8e96d86c30aac7091d'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_selected_related_objects'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '50b69aa76d6b40478eb124f064c67391'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'access_token'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '50d360f044de4235bc87a96ee74f50d6'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_modal_bundle_storage'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '513789f97a1c4122bd3c788fc822ac6a'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_columns'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '53103ac65eb24bd0bd93510891b56c4f'
                        deleted: true
                        key: {
                            endpoint: 'x_peekl_peeklogi_0_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '54049810226e42708b83f3edb9d566b2'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_columns'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5821847d7af34b3fa4523b65570c9ef4'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'sync_delete'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '584f5e8015f04965bea3e3ae4a515e09'
                        deleted: true
                        key: {
                            sys_security_acl: 'a63ebf7f944f49c0b2257f541e12649b'
                            sys_user_role: {
                                id: 'ba75afcacbd34184b23ca04145e1a080'
                                key: {
                                    name: 'x_peekl_peeklogi_0.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5874ac8a5e82419ea94285344ab4ae58'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'sync_create'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ac5669b3d014e19a213f6cdb3b00533'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_record_link'
                            element: 'servicenow_sys_id'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '5b34667af75046b08a1d3f9772cbbfe1'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_related_object_columns'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ba7a748827749e393e990fbe7f07af6'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5e634798671a45c7a121a570e94b4069'
                        key: {
                            name: 'x_peekl_peeklogi_0_task_type_config'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5e6869b92b024ff38a8ba2f2d1530d58'
                        key: {
                            sys_security_acl: '44d828f4b8044f51ace0f9897252fb5a'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ef570f03f2343048dfa4883ace087fe'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                            element: 'sf_object_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5ff8a168696b489ba1215272f36c2902'
                        key: {
                            sys_security_acl: '3214b3aff88949c9ac50e47d284096dd'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '614b803b679f44f4aaae9ba81f145e34'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '61a18a7ad1044645b63ccb9ed453ed9c'
                        key: {
                            sys_security_acl: '2228680cfe064097b77843fd60bec6fa'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '64d7c3685fe74e09becae07d697f373d'
                        key: {
                            sys_security_acl: '1072f66a096e4678a4174af3426e7bdb'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '656b7854acdb4bc9ae74394a72b6afc6'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0/dist/assets/index-CI7xq3sh'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '677343e6f4d54417b06700e8b98a97b5'
                        key: {
                            name: 'x_peekl_peeklogi_0_task_type_config'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '685c7a56b3a64e729a43c29734b9a880'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'instance_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6975f6cceaa140ce845af1fa07309764'
                        key: {
                            sys_security_acl: '510c0adef1de41099992aea730782f6c'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69b045fa31bd48c9b4127bb1a17e07e1'
                        key: {
                            name: 'x_peekl_peeklogi_0_task_type_config'
                            element: 'table_label'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '69c00f9224fe4033b430aa9b87bfc7bb'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_event_queue'
                            element: 'payload'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69d9b175bdf948c3958f32b1c421f651'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_related_object_columns'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6ad393b48d9c455098a380ef8bbb1a82'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_selected_related_objects'
                            element: 'relationship_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '702e584fe4d94ee990a0d56f5c2e12ae'
                        key: {
                            name: 'x_peekl_peeklogi_0/main'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '73eccf5887d54c9f81f5b3f2d74294a8'
                        key: {
                            sys_security_acl: 'cedef8b702514a428835236683c457d9'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '74367d2b95a74661b377fc8c8cefc870'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'connection_ref'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7548127db4bf4940b9807df938e510b0'
                        key: {
                            sys_security_acl: '44c43822dda04c689282b82f352f308d'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75721023d0a9488e9183b928f0ccc857'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_selected_related_objects'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75a8cc9a5bc14598b0e07c7f876e18ed'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '78692f3be4b94674830cbc13777c9b5f'
                        deleted: true
                        key: {
                            sys_security_acl: '86bca412c2584b2cb9c710456f009df9'
                            sys_user_role: {
                                id: '608a2676744142dcbff0350cd7ad0993'
                                key: {
                                    name: 'x_peekl_peeklogi_0.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '79eb77585e48459cbce884e0f849f3bb'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'sync_create'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7cffba7e83234738903a4103fda976be'
                        key: {
                            sys_security_acl: '6016e6ccb48a4cbdadf5eb8f0809e0f5'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7d680831f5ba448da8531f1a9b5cbf3a'
                        key: {
                            sys_security_acl: '4e550809e59848e6a77cc8d0f9d90b37'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7dca89541b264ca1a6573195ff57f68d'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_modal_bundle_storage'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7e7c3216e0eb4e2e8f710edd0865d9cc'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_columns'
                            element: 'column_label'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '80ccb3876fa5401dac05d103a041e76a'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'client_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '82b84fe59bc34289b8eea5b40ac273bb'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_event_queue'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '845f59dc37b34a1f85d5acac351694bd'
                        key: {
                            sys_security_acl: '70aead6a7f144ca3ae804b73da75fb26'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8573970a088440a886f53588f176933f'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'project'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '868f127f681d433eb5f500a6cb7e111a'
                        key: {
                            sys_security_acl: 'ee3853f842c045539cdd25bd3274a691'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '88a666cb276e498e8a518e37d607523a'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_record_link'
                            element: 'sf_object_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '88b07613c8214f8eb44ae8bcb4012685'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_event_queue'
                            element: 'payload'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8961c7b8d2aa4a3988b9317e1cb43e09'
                        key: {
                            sys_security_acl: 'cddc343838ef4554aded62cbf28f5841'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b521d289bb247c1afea533916a4a1fa'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_columns'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8cc9745410fc4acf9ec668604dccd13f'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d0efd73b2d043cebf93f4d7fec24368'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'refresh_token'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '90cc4f1c83a8490a9ba99d44ff31fb7f'
                        key: {
                            sys_security_acl: 'd974a2019c6b406f9b020598df9342db'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '91647dc823a043df876e45b880d0af52'
                        key: {
                            sys_security_acl: 'ab67da7c37014b10b3661babb49406a0'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9175358544534c8b84599433f41c4966'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_selected_related_objects'
                            element: 'object_config'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '943c294252a045ba9aa43ed381956a6d'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_related_object_columns'
                            element: 'column_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '950615bce2fb4bab96167d872f2ff7b0'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'access_token'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '957080ef95af4187a9352e061c5a5376'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_selected_related_objects'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9607c89874504ab9be2af4492b36fdf4'
                        deleted: true
                        key: {
                            sys_security_acl: 'a63ebf7f944f49c0b2257f541e12649b'
                            sys_user_role: {
                                id: 'c67bc60946b440c89a340f1d5ef82b0d'
                                key: {
                                    name: 'salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '976d1a99ee2b4541a40f7b29e13feaf4'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_related_object_columns'
                            element: 'column_label'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '97a81564e4854d389f3e1365760f8ddf'
                        key: {
                            sys_security_acl: '158171bbaa4a4f29849fad178a47033f'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a2031d1632643d0a1a11123e9213dbe'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_record_link'
                            element: 'servicenow_table'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9ab98457bd974ebb9d9c1282d464c6da'
                        key: {
                            sys_security_acl: '77af67563dcf4734804045a84f78c400'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '9b454eacf87c473684eb38a1e6b0837d'
                        key: {
                            name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9d4c10b0cfb740efa0baf4cae2d463c7'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9eba2bb4ea36468b832fc53f5576f0fa'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_columns'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a00c736609864b3f8ce5b8bcd883a9db'
                        deleted: true
                        key: {
                            sys_security_acl: '95f6524de74a4e49b0835a8f2fe42d07'
                            sys_user_role: {
                                id: 'f85d2e819be34737b23b0f63e81942fb'
                                key: {
                                    name: 'x_peekl_peeklogi_0.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a145ccadabc540679e1513a4bec601aa'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_related_object_columns'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a157cc8cc21f4619a354ec798c4af695'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_event_queue'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a26a84dd4d644fa6b0bc7e4e5e0e02ba'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_related_object_columns'
                            element: 'selected_related_object'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a27d4477f15c40f49f71949db268eb52'
                        key: {
                            sys_security_acl: 'a109ee2a08974893aa88c12dc4dc5904'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a358085c8586426e8719a1c7ea197b85'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'is_active'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a44d36d5784a4b149061d2c87f62f945'
                        key: {
                            sys_security_acl: '935dfea10f1a4d72b58a64cb363c21f3'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a843ee98a03348038e6aa50b0af9ea0f'
                        key: {
                            sys_security_acl: '84cb5926479445ca95d3cdd98f806ef0'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a911b133335246dea33b535e5239d14b'
                        key: {
                            sys_security_acl: 'eb54e8fe28874d5d89d44330cefe56b0'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a9e4c6d756a74a50aa3cbf69976ed1be'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_event_queue'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa2a6bd3eb1a4424bb96f577a5f22b24'
                        key: {
                            name: 'x_peekl_peeklogi_0_task_type_config'
                            element: 'connection_ref'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ac2a7283b2634a5a9f714f8dd2aae70a'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_related_object_columns'
                            element: 'column_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad9332e909654199bd2517af1274d274'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_related_object_columns'
                            element: 'column_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b0480b8c673844c1a625bdf2fe883d07'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_record_link'
                            element: 'servicenow_sys_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b09a2598715a4adf869da1bf68557030'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b21cf98ad02f4539a0c6207dfc5d3b70'
                        key: {
                            name: 'x_peekl_peeklogi_0_task_type_config'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b244b31c43e149d7aa73ef8b26bc3b96'
                        key: {
                            sys_security_acl: 'e8cf4e7aa9064bb499a3412d73a46f47'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b5d6f6015cce4e97b512ca3539292a5e'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'organization'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b6d47f0a797941ce9e60f3560c0f545c'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_related_object_columns'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b85e35d5113e4561a5fdbfa4992e49ea'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_related_object_columns'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b9c6650ab4a84ea4b02771d3d40319cf'
                        key: {
                            sys_security_acl: 'fe25212b1a194a6e9b038a7e8e41284c'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bafdd9a30cc745449792f646bb4042cb'
                        key: {
                            sys_security_acl: '059bf7d01c754638a61e236113d85af0'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bde42db088dd48e28bf080d13235d9d5'
                        key: {
                            sys_security_acl: 'b989f89e623f40fd835683e2b4db5ba6'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'be845a502482436ea04a9c3c7440d217'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'client_secret'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bf02c3189ab64b3b8530e2b12a484b59'
                        key: {
                            sys_security_acl: '7ef5854f123d4d6aa4dfb0bbda8182de'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bf4281617c4941f8bd76b50f642d17ba'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'bf5de4eb79024ae09e8393ce532a9f72'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_selected_related_objects'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c1565fd50c4f41f08bf446d0bcd1b3b4'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_modal_bundle_storage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c2aa41406df94053af0ef375e281f878'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_record_link'
                            element: 'servicenow_table'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c51511e2882540ddba8a84157cca4498'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c54aa2a189f34aa892ceb1aff5f103d3'
                        key: {
                            sys_security_acl: '0a790dfacc0546f5b702dc2caff1b79e'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c5e2f92aee6c4fe292e25c80565660b8'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_record_link'
                            element: 'sf_object_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c68846413cb64d27a6ebc3c6e3598727'
                        key: {
                            name: 'x_peekl_peeklogi_0_task_type_config'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ca50256892f94ef2b0f602e4fd9ec252'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cb3a45b909aa47c4ba90a36e56aaae0b'
                        key: {
                            name: 'x_peekl_peeklogi_0_task_type_config'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc8b083a21474708b781ae88bfe02cd6'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'sync_update'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ce791e3908b94a6fb054f6bfd3fa7255'
                        deleted: true
                        key: {
                            sys_security_acl: '95f6524de74a4e49b0835a8f2fe42d07'
                            sys_user_role: {
                                id: '0a94b389ebd5436ca24d749f4db83533'
                                key: {
                                    name: 'x_peekl_peeklogi_0.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'cfc878815c244f30a50aa394f0f6d5d6'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_event_queue'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd08fa19f336c425bb5f0fdb610180c7a'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'salesforce_user_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'd0dd16f332954c2394a9f6d8bedd7582'
                        key: {
                            name: 'x_peekl_peeklogi_0/main.js.map'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd13643a10d724fffb1603627a2527fb0'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'redirect_uri'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd4f3e4993d514f50b2d2b3c31bbaf036'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_record_link'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd51d58407c174fed9873340a47377fac'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd7d844b5d9ae4a1bac974caa7a285573'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_related_object_columns'
                            element: 'order'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd84e59c47db54b3a8f9a8070fec1885a'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd9388788272b4ba79c436082fbedd750'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'is_active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dca66cfebabc4d178e6577252537b6c7'
                        key: {
                            name: 'x_peekl_peeklogi_0_task_type_config'
                            element: 'connection_ref'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dda0892a30df4016b7c7b563d3b84238'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_related_object_columns'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'de914281c16d41ad9a5992d6560f1914'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_selected_related_objects'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'df975c0bb77f4c748ff4aeb0d92f9a6a'
                        key: {
                            name: 'x_peekl_peeklogi_0_task_type_config'
                            element: 'table_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e3406ed8f180478591d46bda1127e1a0'
                        key: {
                            sys_security_acl: '71b63c89540b49dc8a87bc5e925fcf4d'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e71f7afd85a64cbfaff7af996bace102'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                            element: 'sf_object_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e7fc225879eb4c48b6882f8f1980d0c6'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_selected_related_objects'
                            element: 'relationship_name'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e9149d1c14eb4ae6a8c5cce35245e520'
                        key: {
                            sys_security_acl: '826bc70493134803b26f69c78545abe0'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea0c4ea423434a238a1d5f48a19172e3'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                            element: 'searchable'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eac9ced94448459497871243416b07cf'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_event_queue'
                            element: 'retries'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ecfc99cda30245528fda26660a577d53'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ede7ad8dd4604368a7bcbd10990d5d32'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_selected_related_objects'
                            element: 'object_config'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ee311c51480947a1aeb3714d224e4545'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_selected_related_objects'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eee3b0727a554eeb99dae83c241d7a75'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_record_link'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eeee4adb8dce4bb39814d775a8c1d290'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_event_queue'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f10b6c0b82f84f2e9416cc1bf9aee56d'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_event_queue'
                            element: 'retries'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f441c269925544e7a61edc35f17c4b9a'
                        key: {
                            name: 'x_peekl_peeklogi_0_sync_config'
                            element: 'organization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'f546fcb86bef4dc08ee616de490b4a43'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0/dist/assets/index-CI7xq3sh.js.map'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f5616fc49e4c498fab1c44077ef944de'
                        key: {
                            sys_security_acl: '8589a4d2183d4856b4aa605ed3da1d38'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f6a2312525b341bd904eafac5e707f5e'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f717e095034d424c821d037689f48a9a'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_connection'
                            element: 'access_token_expires_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f7a2b000dc9a4aec847b66e58f95f89c'
                        key: {
                            sys_security_acl: '7f7633e9870347ae86e4abb56b713e24'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f8d96f5ecc624a51a8011f02b744ad94'
                        key: {
                            sys_security_acl: 'e333032675a945218efb342d7f0a112f'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fa8cab0bceae45aba547e5ea3e9d7350'
                        deleted: true
                        key: {
                            name: 'x_peekl_peeklogi_0_modal_bundle_storage'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb3a157cdd1b404cbf05cd2ae93afada'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_selected_related_objects'
                            element: 'relationship_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fb59a48efd394c649b8df0b6e8fe7017'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_selected_related_objects'
                            element: 'relationship_label'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fb881af2483640a8aef17f1581ed9a65'
                        key: {
                            sys_security_acl: 'd5330e78cb1e4f658f79b9adb1964d0a'
                            sys_user_role: {
                                id: '9b454eacf87c473684eb38a1e6b0837d'
                                key: {
                                    name: 'x_peekl_peeklogi_0.salesforce_integration_user_paid'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fded8afa0b574c839292881df93af73d'
                        key: {
                            name: 'x_peekl_peeklogi_0_salesforce_object_config'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff91809e83dd4a6a93dd73bf96ad13f4'
                        key: {
                            name: 'x_peekl_peeklogi_0_task_type_config'
                            element: 'connection_id'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
