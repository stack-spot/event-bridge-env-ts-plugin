import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EventbridgeEnvJsiiComponent } from '@stackspot/cdk-env-eventbridge';

class {{ computed_inputs.app_class_name }}Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const eventBridge = new EventbridgeEnvJsiiComponent(this, '{{ computed_inputs.app_class_name }}Bus', {
      busName: '{{ inputs.bus_name }}',
    });

    const rule = EventbridgeEnvJsiiComponent.addRule(
        this,
        eventBridge.bus.eventBusArn,
        {
          description: '{{ inputs.rule_description }}',
          enabled: {% if inputs.rule_enabled %}true{% else %}false{% endif %},
          ruleName: '{{ inputs.rule_name }}',
          eventPattern: JSON.parse('{{ inputs.event_pattern }}'),
        }
    );

    EventbridgeEnvJsiiComponent.addLambdaTarget(rule, destinedLambda);
  }
}
