import './style.scss'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className='singlePostContainer'>
                <img src="https://gopher.hey.com/1200x0,q85,sENtDqqZLQ9CKrevknoVzAF_LyqvmhcziDF9nzEDnCuw=/https://mcusercontent.com/25c33bdcf7d6a4a5939b1ae9a/images/8b8f0c4b-56cc-94f6-9b6f-424ee35f7f06.jpg"
                    alt="Post Image" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    New Blog Post
                    <div className="singlePostEdit">
                        <i class="singlePostIcon edit fi fi-rr-edit"></i>
                        <i class="singlePostIcon delete fi-rs-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <p className='singlePostAuthor'><strong>Author: Yufa</strong></p>
                    <br />
                    <p className="singlePostContent">
                        According to Lattice's latest research, nearly 75% of US employees are either actively looking or are open to new opportunities in the next 6-12 months. Younger people value belonging more than compensation. Companies are desperately trying to find solutions to hire and keep their best talent. One investment that can improve all parts of talent management is incorporating mindfulness practices and principles into them.

                        Mindfulness is being present non-judgmentally, with an open and inquiring mind. People who practice mindfulness will cultivate qualities like being more focused, creative, resilient, and empathetic, among other things. These advantages are so crucial to being productive and fulfilled at work.

                        Here's how mindfulness can incorporate into talent management:

                        Hiring: Hiring is a process to build long-term relationships with your candidates. Employees are looking for belonging and fulfillment at work. Training your recruiters to connect with candidates on a deeper level will be your advantage. Mindfulness training will help the recruiting team show more empathy with candidates.

                        Development & Learning: In today's fast-changing world, a strong sense of curiosity and the ability and willingness to learn and change is the most critical requirements for success. Mindfulness can help you create a growth mindset. Mindfulness improves perceptual ability and cognitive flexibility, and the personality trait of openness to new experiences.

                        Performance Management: Giving and receiving feedback is hard. Both managers and managers benefit from mindfulness practice because it improves emotional self-regulation. It also makes people more receptive to feedback.
                    </p>
                </div>
            </div>
        </div>
    )
}
