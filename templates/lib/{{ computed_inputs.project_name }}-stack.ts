import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EventbridgeEnvJsiiComponent } from '@stackspot/cdk-env-eventbridge';

class {{ computed_inputs.app_class_name }}Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const eventBridge = new EventbridgeEnvJsiiComponent(this, '{{ computed_inputs.app_class_name }}Bus', {
      busName: '{{ inputs.bus_name }}',
    });
  }
}
