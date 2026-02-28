import { getPost } from '@/lib/content'
import ReactMarkdown from 'react-markdown'

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await params.slug ? getPost(params.slug) : null

  if (!post) {
    return (
      <div className="border border-chrome p-8 bg-metal-gray/30">
        <h1 className="text-3xl text-white mb-4">post not found</h1>
        <a href="/blog" className="text-chrome hover:text-chrome-light">← back to blog</a>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <a href="/blog" className="text-chrome hover:text-chrome-light text-sm">← back to blog</a>
      
      <div className="border border-chrome p-8 bg-metal-gray/30">
        <h1 className="text-4xl text-white mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-steel mb-6">
          {post.date && (
            <span>{new Date(post.date).toLocaleDateString()}</span>
          )}
          {post.author && (
            <span>by {post.author}</span>
          )}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex gap-2 mb-6">
            {post.tags.map((tag: string) => (
              <span key={tag} className="text-xs text-chrome border border-chrome px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        )}

        {post.description && (
          <p className="text-chrome-light mb-6 text-lg">{post.description}</p>
        )}

        {post.content && (
          <div className="prose prose-invert prose-chrome max-w-none text-chrome-light">
            <ReactMarkdown
              components={{
                img: ({...props}) => (
                  <img {...props} alt={props.alt || ''} className="w-full h-auto my-6 border border-chrome" />
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  )
}
