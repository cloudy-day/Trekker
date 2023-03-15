import React from 'react'


import { Container, Title, Accordion, createStyles, rem } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 6)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));




const quesArray = [
    {
        id: 1,
        value: "reset-password",
        ques: "What are counterfeit medicines?",
        ans: "Counterfeit medicines are drugs that are deliberately and fraudulently mislabeled with respect to identity or source. They can include medicines with the correct ingredients or with the wrong ingredients, without active ingredients, with incorrect doses or with fake packaging."

    },
    {
        id: 2,
        value: "another-account",
        ques: "How does the blockchain-based counterfeit medicine detection web app work?",
        ans: "The web app utilizes blockchain technology to track and verify the authenticity of medicines. The app stores unique identification numbers for each medicine on the blockchain, and users can scan the medicine's qrcode to verify its authenticity."

    },
    {
        id: 3,
        value: "newsletter",
        ques: "Can the web app detect all types of counterfeit medicines?",
        ans: "The web app can detect counterfeit medicines that have been registered on the blockchain. However, it may not be able to detect counterfeit medicines that have not been registered or those that are created with sophisticated techniques."

    },
    {
        id: 4,
        value: "credit-card",
        ques: "What are the dangers of counterfeit medicines?",
        ans: "Counterfeit medicines can pose a significant danger to public health, as they may contain harmful or toxic ingredients, incorrect dosages, or be ineffective against the targeted disease. Taking counterfeit medicines can lead to serious health complications, including drug resistance, poisoning, or even death."

    },
    {
        id: 5,
        value: "payment",
        ques: "What are the global efforts to combat counterfeit medicines?",
        ans: "International organizations, such as the World Health Organization (WHO), have established initiatives to combat counterfeit medicines, including the implementation of regulatory frameworks and the use of technology, such as blockchain and other digital solutions, to track and verify the authenticity of medicines. Governments and industry stakeholders have also increased efforts to raise awareness about counterfeit medicines and enforce anti-counterfeiting laws."

    },
]

const FAQ = () => {
    const { classes } = useStyles();
    
    return (
     
            
    <Container size="sm" className={classes.wrapper}>
        <Title align="center" className={classes.title}>
            Frequently Asked Questions
        </Title>

        <Accordion variant="separated">
            {
                quesArray.map((ele) => (
                    <Accordion.Item className={classes.item} value={ele.value}>
                        <Accordion.Control>{ ele.ques}</Accordion.Control>
                        <Accordion.Panel>{ele.ans}</Accordion.Panel>
                    </Accordion.Item>
                ))
                        
            }

            
        </Accordion>
    </Container>
         
  );
}





export default FAQ