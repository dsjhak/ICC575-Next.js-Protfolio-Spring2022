import Heading from '../components/Heading'
import Image from 'next/image'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Paragraph from '../components/Paragraph'
import Link from 'next/link'


const AboutPage = () => {
    return <Layout>
        <Container>
            <Image 
                src="/images/01.jpg"
                alt="Rocky coast landscape"
                width={1500}
                height={1000}
                layout="responsive"
            />

            <Heading level="1">About  Title</Heading>
            <Paragraph>This is description about my About </Paragraph>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </Container>
    </Layout>
}
export default AboutPage