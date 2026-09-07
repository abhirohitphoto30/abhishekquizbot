import mqtt from 'mqtt';

// Configure this to match the MQTT broker used in the original HTML
const MQTT_BROKER_URL = process.env.NEXT_PUBLIC_MQTT_BROKER_URL || 'wss://test.mosquitto.org:8081';

let client: mqtt.MqttClient | null = null;

export const connectMQTT = () => {
  if (!client) {
    client = mqtt.connect(MQTT_BROKER_URL, {
      clientId: `quiz-bot-web-${Math.random().toString(16).substr(2, 8)}`,
    });

    client.on('connect', () => {
      console.log('Connected to MQTT Broker');
    });

    client.on('error', (err) => {
      console.error('MQTT Error: ', err);
      client?.end();
    });
  }
  return client;
};

export const getMQTTClient = () => client;
