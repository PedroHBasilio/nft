import {useEffect, useRef} from "react"
import { Flex, Image, Heading, Text, Icon, Link, } from "@chakra-ui/react";
import Equilibrium from "../../assets/Equilibrium.jpg"
import Image2 from "../../assets/image2.png"
import {SiEthereum} from "react-icons/si"
import {AiFillClockCircle} from "react-icons/ai"
import {HiEye} from "react-icons/hi"
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }

export const NftCard = () => {
    const options = {
        scale: 1.0,
        speed: 1000,
        max: 8
    };


    return(
            <Tilt options={options} width="325px">
                <Flex 
                    bgGradient='linear(to-b, blue.800, blue.900)'
                    padding="20px" 
                    flexDirection="column" 
                    width="325px" 
                    height="600px"
                    borderRadius="10px"
                    boxShadow='xl'
                >
                    <Flex>
                        <Image 
                            src={Equilibrium} 
                            alt="Equilibrium cube" 
                            boxSize="300px" 
                            boxShadow='xl'
                            borderRadius="10px"
                        />
                        <Flex 
                            position="fixed" 
                            alignItems="center" 
                            width="285px" 
                            height="300px"
                            borderRadius="10px"
                            justifyContent="center"
                            cursor="pointer"
                            css={{
                                transition: "0.5s",
                                opacity:"0%"
                            }}
                            _hover={{
                                background:"cyan.300",
                                opacity:"50%",
                                transition: "0.5s"
                            }}
                            
                        >
                            <Icon as={HiEye} fontSize="60px" mr="10px" color="white"/>
                        </Flex>
                    </Flex>

                    <Flex pt="20px" flexDirection="column">
                        <Heading 
                            color="white.200"
                            fontSize="22px"
                            fontWeight="semibold"
                            cursor="pointer"
                            _hover={{
                                color: "cyan.300"
                            }}
                        >Equilibrium #3429</Heading>

                        <Text
                            color="blue.200"
                            fontWeight="thin"
                            fontSize="16px"
                            mt="20px"
                        >Our Equilibrium collection promotes balance and calm</Text>
                    </Flex>

                    <Flex justifyContent="space-between" mt="20px">                
                        <Flex color="cyan.300" alignItems="center" >
                            <Icon as={SiEthereum} fontSize="18px" mr="10px"/>
                            <Text                         
                                fontWeight="semibold"
                                fontSize="16px"
                            >0.041ETH</Text>
                        </Flex>

                        <Flex color="blue.200" alignItems="center">
                            <Icon as={AiFillClockCircle} fontSize="16px" mr="10px"/>
                            <Text fontSize="16px">3 days left</Text>
                        </Flex>
                    </Flex>

                    <Flex 
                        mt="20px"
                        pt="20px"
                        borderTop="solid 1px"
                        borderColor="blue.200"
                        alignItems="center"
                    >
                        <Image 
                            src={Image2} 
                            alt="portrait" 
                            boxSize="40px" 
                            borderRadius="100%"
                            border="solid 1px"
                            borderColor="blue.200"
                            mr="10px"
                        />
                        <Text color="blue.200">
                            Creation of <Link 
                                href="https://www.linkedin.com/in/pedro-basilio-385b36213?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS%2B2jcYw%2FTEy4XgBg7YcGjw%3D%3D"
                                isExternal="true"
                                // as="span" 
                                color="white.200"  
                                cursor="pointer"
                                _hover={{
                                color: "cyan.300"
                            }}>Pedro Basilio</Link>
                        </Text>
                    </Flex>
                </Flex>
            </Tilt>
    )
}