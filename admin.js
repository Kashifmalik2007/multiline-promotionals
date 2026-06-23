<%- include('partials/header') %>

<section class="page-hero">
  <div class="container">
    <h1>Product Catalog</h1>
    <p>Browse our complete range of corporate & promotional products</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <!-- FILTER BAR -->
    <div class="filter-bar">
      <form action="/catalog" method="GET" class="filter-form">
        <div class="filter-categories">
          <a href="/catalog" class="cat-btn <%= selectedCategory === 'all' ? 'active' : '' %>">All</a>
          <% categories.forEach(cat => { %>
          <a href="/catalog?category=<%= cat.toLowerCase() %>" class="cat-btn <%= selectedCategory && selectedCategory.toLowerCase() === cat.toLowerCase() ? 'active' : '' %>"><%= cat %></a>
          <% }) %>
        </div>
        <div class="search-bar">
          <input type="text" name="search" placeholder="Search products..." value="<%= search %>">
          <button type="submit"><i class="fas fa-search"></i></button>
        </div>
      </form>
    </div>

    <!-- RESULTS COUNT -->
    <div class="results-count">
      Showing <strong><%= products.length %></strong> product<%= products.length !== 1 ? 's' : '' %>
      <% if (selectedCategory && selectedCategory !== 'all') { %> in <strong><%= selectedCategory.toUpperCase() %></strong><% } %>
      <% if (search) { %> for "<strong><%= search %></strong>"<% } %>
    </div>

    <!-- PRODUCTS GRID -->
    <% if (products.length === 0) { %>
    <div class="empty-state">
      <i class="fas fa-box-open"></i>
      <h3>No products found</h3>
      <p>Try a different search term or category.</p>
      <a href="/catalog" class="btn-primary">View All Products</a>
    </div>
    <% } else { %>
    <div class="products-grid">
      <% products.forEach(product => { %>
      <div class="product-card">
        <div class="product-img">
          <% if (product.featured) { %><span class="badge-featured">FEATURED</span><% } %>
          <% if (product.image && product.image !== '/images/placeholder.jpg') { %>
            <img src="<%= product.image %>" alt="<%= product.name %>" loading="lazy">
          <% } else { %>
            <div class="img-placeholder"><i class="fas fa-image"></i></div>
          <% } %>
        </div>
        <div class="product-info">
          <div class="product-meta">
            <span class="category"><%= product.category %></span>
            <span class="moq">MOQ: <%= product.moq %></span>
          </div>
          <h3><%= product.name %></h3>
          <p><%= product.description.substring(0, 80) %>...</p>
          <p class="contact-note"><i class="fab fa-whatsapp"></i> For prices and details, <a href="https://wa.me/923004303949" target="_blank">please contact us on WhatsApp</a> or <a href="/contact">Email</a>.</p>
          <a href="/product/<%= product.id %>" class="btn-details">View Details <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
      <% }) %>
    </div>
    <% } %>
  </div>
</section>

<%- include('partials/footer') %>
