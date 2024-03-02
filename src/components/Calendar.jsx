import React from "react";
import Event from './Event'


const Calendar = () => {
  
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td className="time"> Instagram </td>
            <Event event='Home Accents' color='green' socialmedia='Instagram' image='Photos/DSC_4402.JPG' location='Find the trending vases of 2024'button='Learn More'/>
             <Event event='Best Miami Locations' color='green' socialmedia='Instagram' image='Photos/IMG_9835.JPG' location='Travelers will love this!'button='Learn More'/>
             <Event event='Neutrals are done...' color='green' socialmedia='Instagram' image='Photos/decorating-tips-32-becca-interiors-project-x-d1a28160890a44dc9e57666825aa46ee.webp' location='Interior design is making a turn this 2024'button='Learn More'/>     
             <Event event='Healthy is IN' color='green' socialmedia='Instagram' image='Photos/IMG_2330.JPG' location='Breakfast recipes you will love'button='Learn More'/>            
             <Event event='Statements' color='green' socialmedia='Instagram' image='Photos/IMG_2166-2.jpg' location='Waiting for the best tips?'button='Learn More'/>            
          </tr>
          <tr>
            <td className="time">Tik Tok</td>
            <Event event='Linen Tables' color='green' socialmedia='Instagram' image='Photos/71Pg6qz4SuL._AC_SL1500_.jpg' location='The best table linens you will find'button='Learn More'/>
             <Event event='Is Red the new Black?' color='green' socialmedia='Instagram' image='Photos/DSC_4197.JPG' location='Vases you will love for Spring'button='Learn More'/>
             <Event event='Centerpieces Favorites' color='green' socialmedia='Instagram' image='Photos/IMG_9470-3.jpg' location='Perfect for your special dinners'button='Learn More'/>     
             <Event event='Nautical Vibes' color='green' socialmedia='Instagram' image='Photos/IMG_1820.jpg' location='Best Ideas Ever'button='Learn More'/>           
             <Event event='Infinite Placemats' color='green' socialmedia='Instagram' image='Photos/IMG_3650-2.jpg' location='Limitless options with this 'button='Learn More'/>  
          </tr>
          <tr>
            <td className="time">X</td>
            <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/DSC_4402.JPG' location='Home Decor'button='Learn More'/>
             <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/IMG_9835.JPG' location='Home Decor'button='Learn More'/>
             <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/decorating-tips-32-becca-interiors-project-x-d1a28160890a44dc9e57666825aa46ee.webp' location='Home Decor'button='Learn More'/>     
             <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/IMG_2330.JPG' location='Home Decor'button='Learn More'/>            
             <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/IMG_2166-2.jpg' location='Home Decor'button='Learn More'/>  
          </tr>
          <tr>
            <td className="time">Threads </td>
            <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/DSC_4402.JPG' location='Home Decor'button='Learn More'/>
             <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/IMG_9835.JPG' location='Home Decor'button='Learn More'/>
             <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/decorating-tips-32-becca-interiors-project-x-d1a28160890a44dc9e57666825aa46ee.webp' location='Home Decor'button='Learn More'/>     
             <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/IMG_2330.JPG' location='Home Decor'button='Learn More'/>            
             <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/IMG_2166-2.jpg' location='Home Decor'button='Learn More'/>  
          </tr>
          <tr>
            <td className="time">Facebook</td>
            <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/DSC_4402.JPG' location='Home Decor'button='Learn More'/>
             <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/IMG_9835.JPG' location='Home Decor'button='Learn More'/>
             <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/decorating-tips-32-becca-interiors-project-x-d1a28160890a44dc9e57666825aa46ee.webp' location='Home Decor'button='Learn More'/>     
             <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/IMG_2330.JPG' location='Home Decor'button='Learn More'/>            
             <Event event='Fancy Dinner 🎩' color='green' socialmedia='Instagram' image='Photos/IMG_2166-2.jpg' location='Home Decor'button='Learn More'/>  
          </tr>
        </tbody>    
      </table>
    </div>
  )
    
}
export default Calendar;
