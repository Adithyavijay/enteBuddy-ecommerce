import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const usePixelEvent = () => {
  const trackEvent = async (
    eventName,
    eventData,
    backendURL,
    additionalInfo = {}
  ) => {
    const eventID = uuidv4();
    const event_time = Math.floor(new Date() / 1000);

    if (window.fbq) {
      window.fbq("track", eventName, eventData, { eventID : eventID });
      console.log(`Pixel event tracked: ${eventName}`, { eventData, eventID });
    }
    
    if (backendURL) {
      try {
        const response = await fetch(backendURL, {
          method: "POST",
          headers: {
            "content-Type": "Application/json",
          },
          body: JSON.stringify({
            eventData,
            eventID,
            event_time,
            eventName,
            additionalInfo,
          }),
        });
        if (!response.ok) {
          throw new Error("Server error . try again");
        }
      } catch (err) {
        console.error(err);
      }
    }
  };
  return trackEvent;
};

export default usePixelEvent;
