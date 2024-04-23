class Graph {
  constructor() {
    this.vertices = [];
    this.edges = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = {};
  }

  addEdge(vertex1, vertex2, weight) {
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
  }

  dijkstra(startVertex) {
    const distances = {};
    const visited = {};
    const previous = {};
    const queue = [];

    // Initialize distances and previous
    for (let i = 0; i < this.vertices.length; i++) {
      const vertex = this.vertices[i];
      distances[vertex] = Infinity;
      previous[vertex] = null;
    }

    // Set the distance of the start vertex to 0
    distances[startVertex] = 0;

    // Add the start vertex to the queue
    queue.push({ vertex: startVertex, distance: 0 });

    while (queue.length > 0) {
      // Sort the queue based on the distances
      queue.sort((a, b) => a.distance - b.distance);

      // Get the vertex with the smallest distance
      const { vertex } = queue.shift();

      // Skip if the vertex has already been visited
      if (visited[vertex]) continue;

      // Mark the vertex as visited
      visited[vertex] = true;

      // Update the distances and previous for the neighboring vertices
      for (const neighbor in this.edges[vertex]) {
        const distance = distances[vertex] + this.edges[vertex][neighbor];

        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          previous[neighbor] = vertex;
          queue.push({ vertex: neighbor, distance });
        }
      }
    }

    return { distances, previous };
  }
}

// Example usage
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("D", "E", 3);

const { distances, previous } = graph.dijkstra("A");

console.log(distances); // Output: { A: 0, B: 4, C: 2, D: 4, E: 7 }
console.log(previous); // Output: { A: null, B: "A", C: "A", D: "C", E: "B" }
