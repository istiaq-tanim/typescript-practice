"use strict";
{
    // spread
    const friendSchool = ["Afjal", "Sakib", "Tusan"];
    const friendArea = ["Rasel", "Tipu", "Shawon"];
    friendSchool.push(...friendArea);
    const friends = (...friends) => {
        return friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    friends("Rasel", "Sakib", "Afjal");
    //destructing
    const person = {
        name: "istiaq",
        age: 30,
        address: {
            permanentAddress: {
                district: "Brahmanbaria",
                village: 'Collegepara',
                country: "Bangladesh"
            },
            presentAddress: {
                district: "Dhaka",
                area: 'Uttara',
                country: "Bangladesh"
            }
        }
    };
    const { name, address: { permanentAddress: { district: myDistrict } } } = person;
    console.log(myDistrict);
}
