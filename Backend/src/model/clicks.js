function generate_clicks(num_clicks) {
    const clicks = {};
    for (let i = 1; i <= num_clicks; i++) {
      clicks[i] = {
        id: i.toString(),
        username: `User ${i}`
      };
    }
    return clicks;
  }
  
  const sample_data = generate_clicks(2);

export default sample_data;