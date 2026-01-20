import Layout from '@/components/Layout';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Head from 'next/head';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function Post({ postData }) {
    return (
        <Layout title={`${postData.title} | Remil Salim`}>
            <article className="case-study">
                <div className="case-study-header section">
                    <Link href="/" className="back-link"><ArrowLeft size={14} /> Back to Work</Link>
                    <h1 className="title">{postData.title}</h1>
                    <p className="subtitle">{postData.description}</p>
                    <div className="meta">
                        <div className="links">
                            {postData.github && (
                                <a href={postData.github} target="_blank" className="meta-link"><Github size={16} /> Source Code</a>
                            )}
                            {postData.demo && (
                                <a href={postData.demo} target="_blank" className="meta-link"><ExternalLink size={16} /> Live Demo</a>
                            )}
                        </div>
                        <div className="tech-stack">
                            {postData.stack && postData.stack.split(',').map(tech => (
                                <span key={tech} className="tech-tag">{tech.trim()}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

                <div className="case-study-footer section">
                    <Link href="/" className="back-link"><ArrowLeft size={14} /> Back to Work</Link>
                </div>
            </article>

            <style jsx global>{`
        .case-study-header {
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 2rem;
            margin-bottom: 3rem;
        }

        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            border: none;
        }
        
        .back-link:hover {
            color: var(--text-primary);
        }

        .title {
            margin-bottom: 0.5rem;
        }

        .subtitle {
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            max-width: 600px;
        }

        .meta {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .links {
            display: flex;
            gap: 1.5rem;
        }

        .meta-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            color: var(--text-primary);
        }

        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .tech-tag {
            font-family: var(--font-mono);
            font-size: 0.8rem;
            color: var(--text-secondary);
            background: var(--bg-secondary);
            padding: 0.2rem 0.6rem;
            border-radius: 4px;
            border: 1px solid var(--border-color);
        }

        /* Typography for the markdown content */
        .content {
            max-width: 680px; /* Optimal reading width */
            margin: 0 auto;
        }

        .content h2 {
            font-size: 1.5rem;
            margin-top: 3rem;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--border-color);
        }

        .content h3 {
            font-size: 1.2rem;
            margin-top: 2rem;
            margin-bottom: 0.8rem;
            color: var(--text-primary);
        }

        .content p {
            margin-bottom: 1.5rem;
            line-height: 1.7;
            font-size: 1.05rem;
            color: var(--text-secondary);
        }

        .content ul, .content ol {
            margin-bottom: 1.5rem;
            padding-left: 1.5rem;
            color: var(--text-secondary);
        }

        .content li {
            margin-bottom: 0.5rem;
        }
        
        .content strong {
            color: var(--text-primary);
            font-weight: 600;
        }
        
        .content blockquote {
            border-left: 3px solid var(--text-tertiary);
            padding-left: 1rem;
            margin: 2rem 0;
            font-style: italic;
            color: var(--text-tertiary);
        }
      `}</style>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.slug);
    return {
        props: {
            postData,
        },
    };
}
