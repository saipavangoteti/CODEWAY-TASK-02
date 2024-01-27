 import React, { useState, useEffect } from 'react';
   import { View, Text, Button } from 'react-native';
   import { getDailyQuote } from './QuoteService';

   const HomeScreen = () => {
       const [quote, setQuote] = useState('Loading...');

       useEffect(() => {
           fetchQuote();
       }, []);

       const fetchQuote = async () => {
           const newQuote = await getDailyQuote();
           setQuote(newQuote);
       };

       const shareQuote = () => {
           // Implement share functionality
           // You can use React Native Share API
       };

       return (
           <View>
               <Text>{quote}</Text>
               <Button title="Share" onPress={shareQuote} />
           </View>
       );
   };

   export default HomeScreen;

