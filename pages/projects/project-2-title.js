import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Paragraph from '../../components/Paragraph'
import Link from 'next/link'


const ProjectTwoPage = () => {
    return <Layout>
        <Container>
            <Image 
                src="/images/02.jpg"
                alt="Rocky coast landscape"
                width={1500}
                height={1000}
                layout="responsive"
            />
            <Heading level="1">Project 2 Title</Heading>
            <Paragraph>This is description about my project</Paragraph>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </Container>
    </Layout>
}
export default ProjectTwoPage