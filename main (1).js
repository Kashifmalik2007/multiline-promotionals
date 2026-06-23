<%- include('partials/header') %>

<div class="container" style="padding-top:100px;">
  <a href="/catalog" class="back-link"><i class="fas fa-arrow-left"></i> Back to Catalog</a>
</div>

<section class="section product-detail-section">
  <div class="container">
    <div class="product-detail-grid">
      <!-- LEFT: Image -->
      <div class="product-detail-img">
        <div class="main-img">
          <% if (product.image && product.image !== '/images/placeholder.jpg') { %>
          <img src="<%= product.image %>" alt="<%= product.name %>" id="mainImg">
          <% } else { %>
          <div class="img-placeholder large"><i class="fas fa-image"></i></div>
          <% } %>
          <% if (product.featured) { %><span class="badge-featured">FEATURED</span><% } %>
        </div>
      </div>

      <!-- RIGHT: Info -->
      <div class="product-detail-info">
        <span class="category-tag"><%= product.category %></span>
        <h1><%= product.name %></h1>
        <p class="product-desc"><%= product.description %></p>
        <p class="price-note"><i class="fab fa-whatsapp"></i> For prices and details, please contact us on WhatsApp or Email.</p>
        
        <div class="moq-badge">Min. Order: <strong><%= product.moq %></strong> units</div>

        <% if (product.details && Object.keys(product.details).length > 0) { %>
        <div class="product-specs">
          <% Object.entries(product.details).forEach(([key, val]) => { %>
          <div class="spec-item">
            <span class="spec-key"><%= key.toUpperCase() %></span>
            <span class="spec-val"><%= val %></span>
          </div>
          <% }) %>
        </div>
        <% } %>

        <div class="detail-actions">
          <a href="https://wa.me/923004303949?text=Hello!%20I'm%20interested%20in%20<%= encodeURIComponent(product.name) %>.%20Please%20send%20me%20pricing%20details." 
             target="_blank" class="btn-whatsapp">
            <i class="fab fa-whatsapp"></i> Contact on WhatsApp
          </a>
          <a href="/contact?product=<%= product.name %>" class="btn-outline">
            <i class="fas fa-envelope"></i> Email for Quote
          </a>
        </div>
      </div>
    </div>

    <!-- RELATED PRODUCTS -->
    <% if (related.length > 0) { %>
    <div class="related-section">
      <h3>Related Products</h3>
      <div class="products-grid">
        <% related.forEach(p => { %>
        <div class="product-card">
          <div class="product-img">
            <% if (p.featured) { %><span class="badge-featured">FEATURED</span><% } %>
            <% if (p.image && p.image !== '/images/placeholder.jpg') { %>
              <img src="<%= p.image %>" alt="<%= p.name %>" loading="lazy">
            <% } else { %>
              <div class="img-placeholder"><i class="fas fa-image"></i></div>
            <% } %>
          </div>
          <div class="product-info">
            <div class="product-meta">
              <span class="category"><%= p.category %></span>
              <span class="moq">MOQ: <%= p.moq %></span>
            </div>
            <h3><%= p.name %></h3>
            <p><%= p.description.substring(0, 80) %>...</p>
            <a href="/product/<%= p.id %>" class="btn-details">View Details <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
        <% }) %>
      </div>
    </div>
    <% } %>
  </div>
</section>

<%- include('partials/footer') %>
