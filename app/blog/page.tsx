import { getPosts, Post } from '@/lib/content'

export default function Blog() {
  const posts = getPosts()

  return (
    <div className="space-y-8">
      <h1 className="text-4xl text-white border-b border-chrome pb-4">blog</h1>
      
      {posts.length === 0 ? (
        <div className="border border-chrome p-8 bg-metal-gray/30">
          <p className="text-chrome-light mb-4">no posts yet.</p>
          <p className="text-steel text-sm">
            add markdown files to <span className="text-chrome">content/posts/</span>
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post: Post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-chrome p-6 bg-metal-gray/30 hover:bg-metal-gray/50 transition-colors"
            >
              <h2 className="text-2xl text-chrome mb-2">{post.title}</h2>
              <div className="flex items-center gap-4 text-steel text-sm mb-3">
                {post.date && (
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                )}
                {post.author && (
                  <span>by {post.author}</span>
                )}
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 mb-3">
                  {post.tags.map((tag: string) => (
                    <span key={tag} className="text-xs text-chrome border border-chrome px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {post.description && (
                <p className="text-chrome-light text-sm">{post.description}</p>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
