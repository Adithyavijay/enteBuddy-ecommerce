import bizSdk from "facebook-nodejs-business-sdk";
import { configDotenv } from "dotenv";

configDotenv();
const Content = bizSdk.Content;
const CustomData = bizSdk.CustomData;
const DeliveryCategory = bizSdk.DeliveryCategory;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const ServerEvent = bizSdk.ServerEvent;

const access_token = process.env.PIXEL_ACCESSTOKEN;
const pixel_id = process.env.PIXEL_ID;
const api = bizSdk.FacebookAdsApi.init(access_token);


export const eventController = {
  viewContent: async (req, res, next) => {
  
    try {   
      
      const { contentIds , content_name ,content_category , content_type , currency , value } = req.body.eventData; 
      const eventID = req.body.eventID;
      const event_time = req.body.event_time;
      const userData = new UserData()
      
        .setClientUserAgent(req.headers["user-agent"])
        .setClientIpAddress(req.headers["x-real-ip"] || req.headers["x-forwarded-for"] || req.connection.remoteAddress)
 
      const customData = new CustomData()
        .setCurrency(currency) 
        .setContentName(content_name)
        .setContentType(content_type)
        .setContentIds(contentIds)
        .setContentCategory(content_category)
        .setValue(value);
      

      const serverEvent = new ServerEvent()
        .setEventName("ViewContent")
        .setEventTime(event_time)
        .setUserData(userData)
        .setCustomData(customData)
        .setEventSourceUrl(req.headers.referer || "unknown")
        .setActionSource("website")
        .setEventId(eventID)
   
      const eventsData = [serverEvent];
      const eventRequest = new EventRequest(access_token, pixel_id).setEvents(
        eventsData
      );

      eventRequest.execute().then(
        (response) => {
          console.log("Response: ", response);
        },
        (err) => {
          throw err;
        }
      ); 
      res.status(200).json("event registered successfully")
    } catch (err) {
      console.error("Error: ",err);
      res.status(500).json("Internal server error")
    }
  }, 

  addToCart : async(req,res)=>{
    try {    
      const phoneNumber = req.user.mobile;
      const { contentIds , content_name ,content_category , content_type , currency , value } = req.body.eventData; 
      const eventID = req.body.eventID;
      const event_time = req.body.event_time;
      const userData = new UserData()
      
        .setClientUserAgent(req.headers["user-agent"])
        .setClientIpAddress(req.headers["x-real-ip"] || req.headers["x-forwarded-for"] || req.connection.remoteAddress)
        .setPhone(phoneNumber)
 
      const customData = new CustomData()
        .setCurrency(currency) 
        .setContentName(content_name)
        .setContentType(content_type)
        .setContentIds(contentIds)
        .setContentCategory(content_category)
        .setValue(value);
      

      const serverEvent = new ServerEvent()
        .setEventName("AddToCart")
        .setEventTime(event_time)
        .setUserData(userData)
        .setCustomData(customData)
        .setEventSourceUrl(req.headers.referer || "unknown")
        .setActionSource("website")
        .setEventId(eventID)
   
      const eventsData = [serverEvent];
      const eventRequest = new EventRequest(access_token, pixel_id).setEvents(
        eventsData
      );

      eventRequest.execute().then(
        (response) => {
          console.log("Response: ", response);
        },
        (err) => {
          throw err;
        }
      ); 
      res.status(200).json("event registered successfully")
    } catch (err) {
      console.error("Error: ",err);
      res.status(500).json("Internal server error")
    }
  } ,
  purchase : async(req,res)=>{
    try {    
      const phoneNumber = req.user.mobile;
      const { contentIds , content_type ,contents, currency , value } = req.body.eventData;  
      const { email , mobile , city ,state ,pincode , billing_address } =req.body.additionalInfo; 
    

      const eventID = req.body.eventID;
      const event_time = req.body.event_time;
      const userData = new UserData()

        .setClientUserAgent(req.headers["user-agent"])
        .setClientIpAddress(req.headers["x-real-ip"] || req.headers["x-forwarded-for"] || req.connection.remoteAddress)
        .setEmail(email)
        .setPhone(phoneNumber)
        .setZip(pincode)
        .setState(state)
        .setCity(city)
      
        
     const contentsArray= []; 
      contents.forEach((contentItem=>{
        const content = (new Content())
        .setId(contentItem.id)
        .setQuantity(contentItem.quantity)
       
        contentsArray.push(content)
      }))
        
      const customData = new CustomData()
        .setCurrency(currency) 
        .setContents(contentsArray)
        .setContentType(content_type)
        .setContentIds(contentIds)
        .setValue(value);
      

      const serverEvent = new ServerEvent()
        .setEventName("Purchase")
        .setEventTime(event_time)
        .setUserData(userData)
        .setCustomData(customData)
        .setEventSourceUrl(req.headers.referer || "unknown")
        .setActionSource("website")
        .setEventId(eventID)
   
      const eventsData = [serverEvent];
      const eventRequest = new EventRequest(access_token, pixel_id).setEvents(
        eventsData
      );

      eventRequest.execute().then(
        (response) => {
          console.log("Response: ", response);
        },
        (err) => { 
          throw err;
        }
      ); 
      res.status(200).json("event registered successfully")
    } catch (err) {
      console.error("Error: ",err);
      res.status(500).json("Internal server error")
    } 
  }
};
