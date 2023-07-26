import { ClientJS } from "clientjs";

const getFingerprint = () => {
    const client = new ClientJS();
    const fingerprint = client.getFingerprint();
    const browser = client.getBrowser();
    const browser_version = client.getBrowserVersion();
    const OS = client.getOS();
    const OS_version = client.getOSVersion();
    const user_agent = client.getUserAgentLowerCase();
    const isMobile = client.isMobile();
    return {
        fingerprint,
        browser,
        browser_version,
        OS,
        OS_version,
        user_agent,
        isMobile,
    };
}
export default getFingerprint;