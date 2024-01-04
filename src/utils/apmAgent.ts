
import apm from 'some-apm-tool'; // Replace with actual APM tool import

// Initialize the APM agent
const apmAgent = apm.start({
    serviceName: 'my-web-app',
    serverUrl: 'http://apm-server:8200',
    secretToken: process.env.APM_SECRET_TOKEN
});

export default apmAgent;
