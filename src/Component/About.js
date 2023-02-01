import React from 'react'
import coverpic from '../Aboutimg.jpg'


const About = () => {
    return (
        <>

            <div className='pic'>
                <img src={coverpic} alt="" />
            </div>


                           {/* who we are? */}
            <div className="AboutUS">
                <h2 style={{ color: "#1ea5d7", fontFamily: "inherit", fontWeight: 500 }}>  Who We Are ?</h2>
                <p className='who' style={{ fontFamily: "sans-serif", fontWeight: 180 }}>We are a <span style={{ color: "red" }}> Non-profit Organization   </span> , working for the welfare of animals. Animal welfare is important because there are so many animals around the world suffering from being used for entertainment, food, medicine, fashion, scientific advancement, and as exotic pets. Every animal deserves to have a good life.
                    <br />
                    Animal welfare refers to the state of the animal; the treatment that an animal receives is covered by other terms such as animal care, animal husbandry, and humane treatment. Protecting an animal's welfare means providing for its physical and mental needs.
                </p>
            </div>
                                      {/* what we do? */}
            <h2 style={{ color: "#1ea5d7", fontFamily: "inherit", fontWeight: 500 }}> What To Do?</h2>
            <p style={{ fontFamily: "sans-serif", fontWeight: 180 }}> We provide shelter to the street homeless animals either it is Dog , Cow , Hen , Ducks .Our door is open for all.We cook for these animals in our shelter and feed them as well as we provide feed for the animals who  live on the street.
                We conduct Feed Programs  for the animals who live outside the city and take care of them as well.
                We provide medical help to the animals who need it. We treat them in our shelter as  well as we  carry them to the veterinary hospital if needed.</p>


        </>
    )
}
export default About;