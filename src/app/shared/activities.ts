import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
{
    "id": 1,
    "name" : "Main Bike Trail",
    "date": new Date('05/05/2019'),
    "distance" : 7.2,
    "comments" : "nice day cool temp",
    "gpxData" : '../../assets/gpx/1.gpx'
},

{
    "id": 2,
    "name" : "Main Jogging Trail",
    "date": new Date('05/05/2018'),
    "distance" : 80,
    "comments" : "nice day cool temp",
    "gpxData" : '../../assets/gpx/2.gpx'
},

{
    "id": 3,
    "name" : "Main Hiking Trail",
    "date": new Date('03/04/2018'),
    "distance" : 20,
    "comments" : "nice day cool temp",
    "gpxData" : '../../assets/gpx/3.gpx'
}
]
